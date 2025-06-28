const employeesData = [
  {
    id: 1,
    firstName: "Arjun",
    email: "a@1.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Meeting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in issue tracker",
        taskDate: "2024-10-14",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create project roadmap",
        taskDescription: "Plan upcoming sprints and milestones",
        taskDate: "2024-10-16",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Backend integration",
        taskDescription: "Failed due to API errors",
        taskDate: "2024-10-15",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team sync-up",
        taskDescription: "Weekly status update meeting",
        taskDate: "2024-10-13",
        category: "Meeting"
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "s@2.com.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better performance",
        taskDate: "2024-10-11",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design new feature",
        taskDescription: "Create mockups for the new feature",
        taskDate: "2024-10-09",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Audit logs implementation",
        taskDescription: "Track user actions for security",
        taskDate: "2024-10-14",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Performance review",
        taskDescription: "Review quarterly performance",
        taskDate: "2024-10-12",
        category: "HR"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "r@3.com.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides for upcoming client presentation",
        taskDate: "2024-10-13",
        category: "Presentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review the codebase for optimization",
        taskDate: "2024-10-12",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        taskDate: "2024-10-08",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Refactor old code",
        taskDescription: "Clean up legacy modules",
        taskDate: "2024-10-15",
        category: "Refactoring"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Mentor session",
        taskDescription: "Guide new interns",
        taskDate: "2024-10-10",
        category: "Training"
      }
    ]
  },
  {
    id: 4,
    firstName: "John",
    email: "j@4.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Update the project documentation",
        taskDate: "2024-10-13",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Set up CI/CD",
        taskDescription: "Implement continuous integration pipeline",
        taskDate: "2024-10-11",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server deployment",
        taskDescription: "Failed during final deployment step",
        taskDate: "2024-10-15",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Tool installation",
        taskDescription: "Install analytics tools",
        taskDate: "2024-10-12",
        category: "Tooling"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Conduct interview",
        taskDescription: "Interview frontend developer candidates",
        taskDate: "2024-10-14",
        category: "HR"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "k@5.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign the user interface for better UX",
        taskDate: "2024-10-14",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest build to production",
        taskDate: "2024-10-09",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback",
        taskDescription: "Gather feedback from clients after product launch",
        taskDate: "2024-10-12",
        category: "Support"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Marketing plan",
        taskDescription: "Draft the go-to-market strategy",
        taskDate: "2024-10-15",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Accessibility audit",
        taskDescription: "Ensure the product is accessible to all users",
        taskDate: "2024-10-11",
        category: "Compliance"
      }
    ]
  }
];

const adminData = [{
    "id": 1,
    "firstName": "Vineet",
    "email": "admin@me.com",
    "password": "123"
}];

export const setLocalStorage=()=>{
    localStorage.setItem('employeesData', JSON.stringify(employeesData))
    localStorage.setItem('adminData', JSON.stringify(adminData))
}
export const getLocalStorage=()=>{
    const employeesData = JSON.parse(localStorage.getItem('employeesData'))
    const adminData = JSON.parse(localStorage.getItem('adminData'))
    
    return {employeesData, adminData}
}