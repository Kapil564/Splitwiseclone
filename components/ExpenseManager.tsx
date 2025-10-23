// 'use client'

// import { useState, useEffect } from 'react'

// interface User {
//   id: string
//   name: string
//   email: string
// }

// interface Expense {
//   id: string
//   description: string
//   amount: any // Decimal from Prisma
//   paidBy: User
//   splits: Array<{
//     id: bigint
//     owedAmount: any // Decimal from Prisma
//     isPaid: boolean
//     user: User
//   }>
// }

// export default function ExpenseManager() {
//   const [users, setUsers] = useState<User[]>([])
//   const [expenses, setExpenses] = useState<Expense[]>([])
//   const [selectedUsers, setSelectedUsers] = useState<string[]>([])
//   const [expenseData, setExpenseData] = useState({
//     description: '',
//     amount: '',
//     paidBy: ''
//   })

//   // Load users and expenses on component mount
//   useEffect(() => {
//     loadData()
//   }, [])

//   const loadData = async () => {
//     try {
//       const [usersData, expensesData] = await Promise.all([
//         getAllUsers(),
//         getAllExpenses()
//       ])
//       setUsers(usersData)
//       setExpenses(expensesData)
//     } catch (error) {
//       console.error('Error loading data:', error)
//     }
//   }

//   const handleAddExpense = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!expenseData.description || !expenseData.amount || !expenseData.paidBy || selectedUsers.length === 0) {
//       alert('Please fill all fields and select at least one person to split with')
//       return
//     }

//     try {
//       await addExpenseWithSplit(
//         expenseData.description,
//         parseFloat(expenseData.amount),
//         expenseData.paidBy,
//         selectedUsers
//       )
      
//       // Reset form
//       setExpenseData({ description: '', amount: '', paidBy: '' })
//       setSelectedUsers([])
      
//       // Reload data
//       await loadData()
      
//       alert('Expense added successfully!')
//     } catch (error) {
//       console.error('Error adding expense:', error)
//       alert('Error adding expense')
//     }
//   }

//   const toggleUserSelection = (userId: string) => {
//     setSelectedUsers(prev => 
//       prev.includes(userId) 
//         ? prev.filter(id => id !== userId)
//         : [...prev, userId]
//     )
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8">Simple Expense Splitter</h1>
      
//       {/* Add Expense Form */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
        
//         <form onSubmit={handleAddExpense} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-2">Description</label>
//             <input
//               type="text"
//               value={expenseData.description}
//               onChange={(e) => setExpenseData(prev => ({ ...prev, description: e.target.value }))}
//               className="w-full p-2 border rounded-md"
//               placeholder="e.g., Dinner at restaurant"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium mb-2">Amount</label>
//             <input
//               type="number"
//               step="0.01"
//               value={expenseData.amount}
//               onChange={(e) => setExpenseData(prev => ({ ...prev, amount: e.target.value }))}
//               className="w-full p-2 border rounded-md"
//               placeholder="0.00"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium mb-2">Paid By</label>
//             <select
//               value={expenseData.paidBy}
//               onChange={(e) => setExpenseData(prev => ({ ...prev, paidBy: e.target.value }))}
//               className="w-full p-2 border rounded-md"
//             >
//               <option value="">Select who paid</option>
//               {users.map(user => (
//                 <option key={user.id} value={user.id}>{user.name}</option>
//               ))}
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium mb-2">Split With</label>
//             <div className="space-y-2">
//               {users.map(user => (
//                 <label key={user.id} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedUsers.includes(user.id)}
//                     onChange={() => toggleUserSelection(user.id)}
//                     className="rounded"
//                   />
//                   <span>{user.name}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
          
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//           >
//             Add Expense
//           </button>
//         </form>
//       </div>

//       {/* Expenses List */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
        
//         {expenses.length === 0 ? (
//           <p className="text-gray-500">No expenses yet. Add your first expense above!</p>
//         ) : (
//           <div className="space-y-4">
//             {expenses.map(expense => (
//               <div key={expense.id} className="border p-4 rounded-md">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-medium">{expense.description}</h3>
//                   <span className="font-bold text-lg">${expense.amount}</span>
//                 </div>
                
//                 <p className="text-sm text-gray-600 mb-2">
//                   Paid by: <span className="font-medium">{expense.paidBy.name}</span>
//                 </p>
                
//                 <div className="text-sm">
//                   <p className="font-medium mb-1">Split among:</p>
//                   <div className="space-y-1">
//                     {expense.splits.map(split => (
//                       <div key={split.id} className="flex justify-between">
//                         <span>{split.user.name}</span>
//                         <span className={split.isPaid ? 'text-green-600' : 'text-red-600'}>
//                           ${split.owedAmount} {split.isPaid ? '(Paid)' : '(Pending)'}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
