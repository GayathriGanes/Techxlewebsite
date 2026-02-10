import { Component } from '@angular/core';

@Component({
  selector: 'app-core-capabilities',
  templateUrl: './core-capabilities.component.html',
  styleUrl: './core-capabilities.component.css'
})
export class CoreCapabilitiesComponent {
activeTab: string = 'ai';

  // AI Tab Features
  aiFeatures: string[] = [
    'Smart Automation & Workflow Intelligence – Automate repetitive tasks and optimize complex workflows',
    'Predictive Analytics & Decision Support – Turn data into actionable insights',
    'Cloud-Native & Scalable Platforms – Secure, resilient, and future-ready architectures',
    'Enterprise & Healthcare Integrations – Seamless connectivity with EHRs, LIMS, ERP, HR, and other enterprise systems'
  ];

  // Services Tab Features
  serviceFeatures: string[] = [
    'Digital Strategy & Transformation Roadmaps',
    'Agile Software Development & DevOps Enablement',
    'Technical Leadership & IT Staffing Support',
    'Program, Project, and Product Management'
  ];

  // Product Tab Features
  productFeatures: string[] = [
    'Full-Stack Application Development (Frontend & Backend)',
    'Low-Code & No-Code Platforms (Microsoft Power Platform)',
    'Secure Data Platforms, Dashboards & Portals',
    'Managed Services & Ongoing Support'
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }

  getImage(): string {
    if (this.activeTab === 'ai') {
      return 'assets/images/core-cap.png';
    }
    if (this.activeTab === 'services') {
      return 'assets/images/prof-service.png';
    }
    return 'assets/images/prod-ui.png';
  }
}
