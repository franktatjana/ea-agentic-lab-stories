"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

function formatCurrency(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export function CostCalculator() {
  const [salary, setSalary] = useState(150000);
  const [rampDays, setRampDays] = useState(90);
  const [teamSize, setTeamSize] = useState(10);
  const [turnover, setTurnover] = useState(15);
  const [calculated, setCalculated] = useState(false);

  const dailyRate = salary / 260;
  const directSalary = Math.round(dailyRate * rampDays);
  const enablementTime = Math.round(directSalary * 0.333);
  const delayedPipeline = Math.round(dailyRate * rampDays * 2.22);
  const totalPerHire = directSalary + enablementTime + delayedPipeline;
  const newHiresPerYear = Math.round(teamSize * (turnover / 100));
  const annualCost = totalPerHire * Math.max(newHiresPerYear, 1);

  return (
    <Section id="cost" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Math
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            What Ramp Time Actually Costs
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Direct costs. Opportunity costs. Compounding costs.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-8">
        <div className="rounded-xl border border-border bg-surface p-6 md:p-8 space-y-8">
          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Average SA compensation</span>
                <span className="font-mono font-bold">
                  {formatCurrency(salary)}
                </span>
              </div>
              <input
                type="range"
                min={100000}
                max={250000}
                step={5000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>$100K</span>
                <span>$250K</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Ramp time to productivity</span>
                <span className="font-mono font-bold">{rampDays} days</span>
              </div>
              <input
                type="range"
                min={30}
                max={180}
                step={5}
                value={rampDays}
                onChange={(e) => setRampDays(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>30 days</span>
                <span>180 days</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Team size</span>
                <span className="font-mono font-bold">{teamSize}</span>
              </div>
              <input
                type="range"
                min={5}
                max={50}
                step={1}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>5</span>
                <span>50</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Annual turnover rate</span>
                <span className="font-mono font-bold">{turnover}%</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCalculated(true)}
            className="w-full rounded-lg bg-accent py-3 font-semibold text-background transition-colors hover:bg-accent-dim"
          >
            Calculate
          </button>
        </div>

        {calculated && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-surface p-6 md:p-8 font-mono text-sm space-y-4"
          >
            <h3 className="text-lg font-bold font-sans mb-6">
              Annual Cost of Ramping
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted">Direct salary during ramp</span>
                <span>{formatCurrency(directSalary)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Senior SA enablement time</span>
                <span>{formatCurrency(enablementTime)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">
                  Delayed pipeline contribution
                </span>
                <span>{formatCurrency(delayedPipeline)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-bold text-base">
                <span>Total per new hire</span>
                <span className="text-accent">
                  {formatCurrency(totalPerHire)}
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-4 space-y-2">
              <p className="text-muted">
                With {turnover}% turnover on {teamSize}-person team:
              </p>
              <div className="flex justify-between font-bold text-lg font-sans">
                <span>Annual organizational cost</span>
                <span className="text-red-400">
                  {formatCurrency(annualCost)}
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-4 space-y-1 text-muted text-xs">
              <p>This calculation excludes:</p>
              <ul className="space-y-1 ml-4">
                <li>&bull; Deals lost during ramp period</li>
                <li>&bull; Customer experience inconsistency</li>
                <li>&bull; Repeated mistakes from undocumented learnings</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
