'use client';

import { useState, useEffect } from 'react';
import { diyPlaybook } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { CloseIcon, CheckIcon, ChevronRightIcon, DownloadIcon, CopyIcon, BookOpenIcon } from '@/components/ui/Icons';

interface PlaybookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlaybookModal({ isOpen, onClose }: PlaybookModalProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedTemplate(id);
      setTimeout(() => setCopiedTemplate(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isOpen) return null;

  const sections = diyPlaybook.sections;
  const currentSection = sections[activeSection];

  // Render content based on section type
  const renderContent = () => {
    const content = currentSection.content;

    return (
      <div className="space-y-8">
        {/* D0: Setup Decisions */}
        {'requiredDecisions' in content && (
          <>
            <div>
              <h4 className="font-bold text-coal text-lg mb-4">Required Decisions</h4>
              <div className="space-y-4">
                {Array.isArray(content.requiredDecisions) && content.requiredDecisions.map((decision: { field: string; description: string; example?: string; options?: string[] }, index: number) => (
                  <div key={index} className="p-4 rounded-xl bg-ice border border-border">
                    <h5 className="font-bold text-coal mb-1">{decision.field}</h5>
                    <p className="text-steel text-sm mb-2">{decision.description}</p>
                    {decision.example && (
                      <p className="text-xs text-sage bg-sage/10 px-3 py-1.5 rounded-lg inline-block">
                        Example: {decision.example}
                      </p>
                    )}
                    {decision.options && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {decision.options.map((opt, i) => (
                          <span key={i} className="text-xs bg-coal/5 text-coal px-2 py-1 rounded">
                            {opt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {'badLeadRules' in content && (
              <div className="p-6 rounded-xl bg-safety/10 border border-safety/20">
                <h4 className="font-bold text-coal mb-3">Bad Lead Prevention</h4>
                <ul className="space-y-2">
                  {Array.isArray(content.badLeadRules) && content.badLeadRules.map((rule: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckIcon size={16} className="text-safety flex-shrink-0 mt-0.5" />
                      <span className="text-coal text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* D1: GBP Setup */}
        {'steps' in content && (
          <>
            <div className="space-y-6">
              {Array.isArray(content.steps) && content.steps.map((step: { id: string; title: string; instructions?: string[]; primary?: string; secondary?: string[]; rule?: string; utahExample?: Record<string, string[]> }, index: number) => (
                <div key={step.id} className="relative pl-10">
                  <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h5 className="font-bold text-coal mb-2">{step.title}</h5>
                  {step.instructions && (
                    <ul className="space-y-1">
                      {step.instructions.map((inst, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-steel">
                          <span className="text-sage">•</span>
                          {inst}
                        </li>
                      ))}
                    </ul>
                  )}
                  {step.primary && (
                    <p className="text-sm mt-2">
                      <span className="font-medium">Primary:</span> {step.primary}
                    </p>
                  )}
                  {step.secondary && (
                    <div className="mt-2">
                      <span className="text-sm font-medium">Secondary:</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {step.secondary.map((s, i) => (
                          <span key={i} className="text-xs bg-sage/10 text-sage px-2 py-1 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {step.rule && (
                    <p className="mt-2 text-xs text-safety italic">{step.rule}</p>
                  )}
                </div>
              ))}
            </div>

            {'descriptionTemplate' in content && (
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-coal">Business Description Template</h4>
                  <button
                    onClick={() => content.descriptionTemplate && copyToClipboard(content.descriptionTemplate, 'desc')}
                    className="flex items-center gap-1.5 text-xs text-steel hover:text-coal"
                  >
                    {copiedTemplate === 'desc' ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                    {copiedTemplate === 'desc' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-coal text-white text-sm p-4 rounded-xl whitespace-pre-wrap font-mono">
                  {content.descriptionTemplate ?? ''}
                </pre>
              </div>
            )}

            {'photoRequirements' in content && (
              <div className="p-6 rounded-xl bg-ice">
                <h4 className="font-bold text-coal mb-3">Photo Requirements: {content.photoRequirements?.minimum}</h4>
                <ul className="space-y-2">
                  {Array.isArray(content.photoRequirements?.breakdown) && content.photoRequirements.breakdown.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-steel">
                      <CheckIcon size={14} className="text-sage flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {'qnaSeeds' in content && (
              <div>
                <h4 className="font-bold text-coal mb-4">Q&A Seeds to Add</h4>
                <div className="space-y-3">
                  {Array.isArray(content.qnaSeeds) && content.qnaSeeds.slice(0, 4).map((qa: { question: string; answer: string }, i: number) => (
                    <div key={i} className="p-4 rounded-xl bg-ice">
                      <p className="font-medium text-coal text-sm mb-1">Q: {qa.question}</p>
                      <p className="text-steel text-sm">A: {qa.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* D2: Reviews System */}
        {'setupSteps' in content && (
          <>
            <div>
              <h4 className="font-bold text-coal mb-4">Setup Steps</h4>
              <div className="space-y-3">
                {Array.isArray(content.setupSteps) && content.setupSteps.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-ice">
                    <div className="w-6 h-6 rounded-full bg-sage/20 text-sage flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-coal text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {'smsTemplates' in content && (
              <div>
                <h4 className="font-bold text-coal mb-4">SMS Templates</h4>
                <div className="space-y-4">
                  {Array.isArray(content.smsTemplates) && content.smsTemplates.map((sms: { id: string; label: string; template: string }) => (
                    <div key={sms.id} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-coal">{sms.label}</span>
                        <button
                          onClick={() => copyToClipboard(sms.template, sms.id)}
                          className="flex items-center gap-1.5 text-xs text-steel hover:text-coal"
                        >
                          {copiedTemplate === sms.id ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                          {copiedTemplate === sms.id ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <pre className="bg-coal text-white text-sm p-4 rounded-xl whitespace-pre-wrap font-mono">
                        {sms.template}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {'complianceRules' in content && (
              <div className="p-6 rounded-xl bg-safety/10 border border-safety/20">
                <h4 className="font-bold text-coal mb-3">Compliance Rules</h4>
                <ul className="space-y-2">
                  {Array.isArray(content.complianceRules) && content.complianceRules.map((rule: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-coal">
                      <span className="text-safety">⚠️</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* D3: Social Presence */}
        {'accountSetup' in content && (
          <>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-ice">
                <h5 className="font-bold text-coal mb-3">Facebook Setup</h5>
                <ul className="space-y-2">
                  {Array.isArray(content.accountSetup?.facebook) && content.accountSetup.facebook.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-steel">
                      <CheckIcon size={14} className="text-sage flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-ice">
                <h5 className="font-bold text-coal mb-3">Instagram Setup</h5>
                <ul className="space-y-2">
                  {Array.isArray(content.accountSetup?.instagram) && content.accountSetup.instagram.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-steel">
                      <CheckIcon size={14} className="text-sage flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {'starterGrid' in content && (
              <div>
                <h4 className="font-bold text-coal mb-3">{content.starterGrid?.description}</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {Array.isArray(content.starterGrid?.posts) && content.starterGrid.posts.map((post: { type: string; content: string }, i: number) => (
                    <div key={i} className="p-3 rounded-xl bg-ice text-center">
                      <span className="text-xs font-medium text-sage uppercase">{post.type}</span>
                      <p className="text-sm text-coal mt-1">{post.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* D4: Lead Intake */}
        {'instantFormFields' in content && (
          <>
            <div>
              <h4 className="font-bold text-coal mb-4">Lead Form Fields</h4>
              <div className="space-y-3">
                {Array.isArray(content.instantFormFields) && content.instantFormFields.map((field: { question: string; type: string; options?: string[] }, i: number) => (
                  <div key={i} className="p-4 rounded-xl bg-ice">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-sage uppercase">{field.type}</span>
                    </div>
                    <p className="font-medium text-coal text-sm">{field.question}</p>
                    {field.options && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {field.options.map((opt, j) => (
                          <span key={j} className="text-xs bg-sage/10 text-sage px-2 py-1 rounded">
                            {opt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {'responseTemplates' in content && (
              <div>
                <h4 className="font-bold text-coal mb-4">Response Templates</h4>
                <div className="space-y-4">
                  {Array.isArray(content.responseTemplates) && content.responseTemplates.map((resp: { trigger: string; template: string }, i: number) => (
                    <div key={i} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-coal">{resp.trigger}</span>
                        <button
                          onClick={() => copyToClipboard(resp.template, `resp-${i}`)}
                          className="flex items-center gap-1.5 text-xs text-steel hover:text-coal"
                        >
                          {copiedTemplate === `resp-${i}` ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                          {copiedTemplate === `resp-${i}` ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                      <pre className="bg-coal text-white text-sm p-4 rounded-xl whitespace-pre-wrap font-mono">
                        {resp.template}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* D5: Meta Ads */}
        {'campaignStructure' in content && (
          <>
            <div>
              <h4 className="font-bold text-coal mb-4">Campaign Structure</h4>
              <div className="space-y-4">
                {content.campaignStructure && Object.entries(content.campaignStructure).map(([key, campaign]) => (
                  <div key={key} className="p-4 rounded-xl bg-ice">
                    <h5 className="font-bold text-coal mb-1">{(campaign as { name?: string }).name || key}</h5>
                    {(campaign as { objective?: string }).objective && (
                      <p className="text-sm text-steel">Objective: {(campaign as { objective?: string }).objective}</p>
                    )}
                    {(campaign as { budget?: string }).budget && (
                      <span className="text-xs bg-sage/10 text-sage px-2 py-1 rounded inline-block mt-2">
                        {(campaign as { budget?: string }).budget}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {'geoStructure' in content && Array.isArray(content.geoStructure) && (
              <div>
                <h4 className="font-bold text-coal mb-4">Geographic Ad Sets</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.geoStructure.map((geo: { name: string; area: string }, i: number) => (
                    <div key={i} className="p-3 rounded-xl bg-ice">
                      <span className="text-sm font-medium text-coal">{geo.name}:</span>
                      <span className="text-sm text-steel ml-2">{geo.area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {'adCopy' in content && (
              <div>
                <h4 className="font-bold text-coal mb-4">Ad Copy Templates</h4>
                {Array.isArray(content.adCopy) && content.adCopy.map((ad: { id: string; headline: string; primary: string; cta: string }, i: number) => (
                  <div key={i} className="mb-4 p-4 rounded-xl bg-ice">
                    <h5 className="font-bold text-coal text-lg">{ad.headline}</h5>
                    <p className="text-steel text-sm mt-2 mb-3">{ad.primary}</p>
                    <span className="inline-flex px-4 py-2 bg-sage text-white text-sm font-medium rounded-lg">
                      {ad.cta}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {'budgetGuidance' in content && (
              <div className="p-6 rounded-xl bg-sage/10 border border-sage/20">
                <h4 className="font-bold text-coal mb-3">Budget Guidance</h4>
                <ul className="space-y-2">
                  {Object.entries((content.budgetGuidance ?? {}) as Record<string, string>).map(([key, value]) => (
                    <li key={key} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-coal">{key}:</span>
                      <span className="text-steel">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[60] flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-coal/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative flex w-full max-w-6xl mx-auto my-4 md:my-8">
        {/* Sidebar Navigation */}
        <div className="hidden md:flex flex-col w-64 bg-coal text-white rounded-l-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <BookOpenIcon size={24} className="text-safety" />
              <div>
                <h2 className="font-bold text-lg">DIY Playbook</h2>
                <p className="text-white/60 text-sm">Free Lead Engine Guide</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`
                  w-full text-left px-4 py-3 rounded-xl transition-colors
                  ${activeSection === index
                    ? 'bg-safety text-coal'
                    : 'text-white/80 hover:bg-white/10'
                  }
                `}
              >
                <span className="font-medium text-sm">{section.title}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-white/20 text-white hover:bg-white/10"
              icon={<DownloadIcon size={16} />}
              iconPosition="left"
            >
              Download PDF
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-r-2xl md:rounded-l-none rounded-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
            {/* Mobile Section Selector */}
            <div className="md:hidden flex-1">
              <select
                value={activeSection}
                onChange={(e) => setActiveSection(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-xl border border-border bg-white text-coal font-medium"
              >
                {sections.map((section, index) => (
                  <option key={section.id} value={index}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Title */}
            <div className="hidden md:block">
              <h3 className="font-bold text-xl text-coal">{currentSection.title}</h3>
              <p className="text-sm text-steel">{currentSection.description}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-ice hover:bg-concrete flex items-center justify-center transition-colors ml-4"
            >
              <CloseIcon size={20} className="text-coal" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            {/* Mobile Description */}
            <p className="md:hidden text-steel mb-6">{currentSection.description}</p>

            {renderContent()}
          </div>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between p-4 md:p-6 border-t border-border bg-ice">
            <Button
              variant="ghost"
              onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
              disabled={activeSection === 0}
              className="text-steel"
            >
              ← Previous
            </Button>

            <div className="flex items-center gap-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`
                    w-2 h-2 rounded-full transition-colors
                    ${activeSection === index ? 'bg-sage' : 'bg-steel/30'}
                  `}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
              disabled={activeSection === sections.length - 1}
              className="text-coal"
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
