// utility types

//////////////////// PARTIAL UTILITY TYPE ////////////////////////
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdated: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdated };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

// console.log(updateAssignment(assign1, { grade: 95 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//////////////////// REQUIRED AND READONLY ////////////////////////

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to db or whatever
  return assign;
};

// const assign2: Assignment = {
//   studentId: "Eng101",
//   title: "First Assignment",
//   grade: 78,
//   verified: true,
// };

// console.log(recordAssignment({...assign2, verified: true}));
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};
