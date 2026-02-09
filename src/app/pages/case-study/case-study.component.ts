import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent {
  constructor(private router: Router) {}

currentIndex = 0;

  caseStudies = [
    {
      tag: 'LABAX LIMS',
      title: 'Case Intelligent Laboratory Information Management System',
      route: 'solutions/labax-lims',
      description: `LabAx is a next-generation Laboratory Information Management System (LIMS) designed to help modern laboratories operate smarter, faster, and more compliantly.
       Built with scalability, automation, and intelligence at its core, LabAx enables laboratories to digitize workflows, eliminate manual errors, and gain real-time visibility across instruments, samples, people, and processes.<br>
       LabAx is ideal for pharmaceutical, healthcare, research, industrial, food & beverage, energy, and compliance-driven laboratories seeking operational excellence and measurable ROI.`,
      image: 'assets/images/Mask group (8).png'
    },
    {
      tag: 'ERP SOLUTIONS',
      title: 'ERP Solutions',
      route: 'solutions/erp-solutions',
      description: `Our flexible, UAE-compliant ERP platform adapts to your business across industries, sizes, and growth stages.
       The modular design aligns with your workflows and regulatory requirements, providing efficiency, visibility, and intelligence from day one.<br>
        Built for SMEs and large enterprises alike, our solution combines deep customization, industry expertise, and AI-powered insights to help businesses operate smarter and stay compliant in the UAE.`,
      image: 'assets/images/Mask group (8).png'
    },
    {
      tag: 'AGENTIC RAG ',
      title: 'Intelligent Knowledge Automation with Agentic Retrieval-Augmented Generation (RAG) ',
      route: 'solutions/agentic-rag',
      description: ` Agentic RAG (Retrieval-Augmented Generation with Autonomous Agents) is an advanced AI architecture that combines Large Language Models (LLMs), enterprise knowledge retrieval, and intelligent agents to deliver accurate, contextual, and action-oriented responses.<br>
       Unlike traditional chatbots or basic RAG systems, Agentic RAG does not just answer questions—it plans, reasons, retrieves, validates, and executes tasks across enterprise systems.<br>
        This makes Agentic RAG ideal for organizations that require trusted AI, process automation, and decision intelligence across regulated and data-sensitive environments such as ERP, finance, compliance, manufacturing, healthcare, and government. `,
      image: 'assets/images/Mask group (8).png'
    }

  ];

  next() {
    if (this.currentIndex < this.caseStudies.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  goToSolution() {
  const selectedRoute = this.caseStudies[this.currentIndex].route;
  this.router.navigate([selectedRoute]);
}

}
