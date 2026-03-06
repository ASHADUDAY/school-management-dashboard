export interface MenuStep {
  label: string;
  key: string;
  openCardFlag: boolean;
  hasChild: boolean;
  icon: string;
  children?: MenuStep[];
}

export const MENU_STEPPER_CONFIG: MenuStep[] = [
  {
    label: "Dashboard",
    key: "dashboard",
    openCardFlag: false,
    hasChild: false,
    icon: "dashboard",
    // children: [
    //   { label: "1ste Aangifte", key: "firstDeclaration", hasChild: false },
    //   { label: "2de Aangifte", key: "secondDeclaration", hasChild: false },
    //   { label: "Partijen", key: "parties", hasChild: false },
    //   { label: "Einde", key: "end", hasChild: false },
    // ],
  },
  {
    label: "Students",
    key: "students",
    openCardFlag: false,
    hasChild: true,
    icon: "students",
    children: [
      {
        label: "Add Student",
        key: "addStudent",
        openCardFlag: false,
        hasChild: false,
        icon: "add",
        children: [],
      },
      {
        label: "Edit Student",
        key: "editStudent",
        openCardFlag: false,
        hasChild: false,
        icon: "edit",
        children: [],
      },
      {
        label: "Delete Student",
        key: "deleteStudent",
        openCardFlag: false,
        hasChild: false,
        icon: "delete",
        children: [],
      },
    ],
  },
  {
    label: "Teachers",
    key: "teachers",
    openCardFlag: false,
    hasChild: true,
    icon: "teachers",
    children: [
      {
        label: "Add Teacher",
        key: "addTeacher",
        openCardFlag: false,
        hasChild: false,
        icon: "add",
        children: [],
      },
      {
        label: "Edit Teacher",
        key: "editTeacher",
        openCardFlag: false,
        hasChild: false,
        icon: "edit",
        children: [],
      },
      {
        label: "Delete Teacher",
        key: "deleteTeacher",
        openCardFlag: false,
        hasChild: false,
        icon: "delete",
        children: [],
      },
    ],
  },
  {
    label: "Classes",
    key: "classes",
    openCardFlag: false,
    hasChild: false,
    icon: "classes",
  },
  {
    label: "Attendance",
    key: "attendance",
    openCardFlag: false,
    hasChild: false,
    icon: "attendance",
  },
  {
    label: "Fees",
    key: "fees",
    openCardFlag: false,
    hasChild: false,
    icon: "fees",
  },
  {
    label: "Reports",
    key: "reports",
    openCardFlag: false,
    hasChild: false,
    icon: "reports",
  },
  {
    label: "Settings",
    key: "settings",
    openCardFlag: false,
    hasChild: false,
    icon: "settings",
  },
];
