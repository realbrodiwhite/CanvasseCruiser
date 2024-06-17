canvassing-app/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Sidebar.js
│   │   │   ├── Loader.js
│   │   │   ├── Modal.js
│   │   │   └── Notification.js
│   │   ├── canvasser/
│   │   │   ├── CanvasserDashboard.js
│   │   │   ├── CanvassingRoutes.js
│   │   │   ├── LeadForm.js
│   │   │   ├── VisitedAddresses.js
│   │   │   └── PerformanceMetrics.js
│   │   ├── closer/
│   │   │   ├── CloserDashboard.js
│   │   │   ├── SalesLeads.js
│   │   │   ├── CustomerDetails.js
│   │   │   ├── SalesForm.js
│   │   │   └── CommissionTracker.js
│   │   ├── crewLeader/
│   │   │   ├── CrewManagement.js
│   │   │   ├── RouteAssignment.js
│   │   │   ├── CanvasserPerformance.js
│   │   │   └── SupportTickets.js
│   │   ├── customerService/
│   │   │   ├── CustomerTickets.js
│   │   │   ├── CustomerDetails.js
│   │   │   ├── KnowledgeBase.js
│   │   │   └── SatisfactionSurvey.js
│   │   ├── managers/
│   │   │   ├── ManagerDashboard.js
│   │   │   ├── TeamPerformance.js
│   │   │   ├── TargetSettings.js
│   │   │   └── CoachingTools.js
│   │   └── admin/
│   │       ├── AdminDashboard.js
│   │       ├── UserManagement.js
│   │       ├── RolePermissions.js
│   │       ├── SystemSettings.js
│   │       └── AuditLogs.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── dataService.js
│   │   ├── utilityService.js
│   │   ├── notificationService.js
│   │   └── integrationService.js
│   ├── utils/
│   │   ├── formatters.js
│   │   └── validators.js
│   ├── App.js
│   └── index.js
├── public/
│   ├── index.html
│   └── favicon.ico
├── package.json
└── package-lock.json


This file structure includes the following directories and files:

- `src/components/`: Contains all the React components organized by their respective roles and responsibilities.
  - `common/`: Common components used across the application.
  - `canvasser/`: Components specific to the canvasser role.
  - `closer/`: Components specific to the closer (salesperson) role.
  - `crewLeader/`: Components specific to the crew leader role.
  - `customerService/`: Components specific to the customer service role.
  - `managers/`: Components specific to the manager roles.
  - `admin/`: Components specific to the admin roles.
- `src/services/`: Contains utility services for authentication, data retrieval, notifications, and integration with external services.
- `src/utils/`: Contains utility functions for formatting and validating data.
- `src/App.js`: The main entry point of the React application.
- `src/index.js`: The file that renders the React application.
- `public/`: Contains the HTML file and other static assets.
- `package.json`: The project's package configuration file.
- `package-lock.json`: The automatically generated file that locks the installed package versions.