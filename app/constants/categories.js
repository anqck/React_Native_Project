import R from 'ramda';

export const categoriesTypes = {
  expense: 'Chi',
  income: 'Thu',
};

export const isExpense = type => type === categoriesTypes.expense;

export const isIncome = type => type === categoriesTypes.income;

const incomeCategories = [
  { name: 'Lương', icon: 'cash' },
  { name: 'Tiết kiệm', icon: 'coin' },
  { name: 'Tiền gửi', icon: 'castle' },
];

const expenseCategories = [
  { name: 'Hóa đơn', icon: 'tag' },
  { name: 'Gửi xe', icon: 'car' },
  { name: 'Điện thoại', icon: 'phone' },
  { name: 'Ăn ngoài', icon: 'silverware' },
  { name: 'Giải trí', icon: 'accusoft' },
  { name: 'Thực phẩm', icon: 'food' },
  { name: 'Quà', icon: 'gift' },
  { name: 'Sức khỏe', icon: 'heart-pulse' },
  { name: 'Tiền nhà', icon: 'home-variant' },
  { name: 'Vật nuôi', icon: 'cat' },
  { name: 'Thể thao', icon: 'dumbbell' },
  { name: 'Taxi', icon: 'taxi' },
];

const withType = type => category => ({ ...category, type });
const allWithType = type => R.map(withType(type));

export const defaultCategories = [
  ...allWithType(categoriesTypes.income)(incomeCategories),
  ...allWithType(categoriesTypes.expense)(expenseCategories),
];
