// The OrderService class depends directly on the low level class MySQLDatabase.
// If in the future we wanted to change the database that we are using
// we would have to modify the OrderService class.

// class OrderService {
//   database: SQLDatabase;

//   constructor() {
//     this.database = new SQLDatabase()
//   }

//   save(order: Order): void {
//     if (order.id === undefined) {
//       this.database.insert(order);
//     } else {
//       this.database.update(order);
//     }
//   }
// }

// class SQLDatabase {
//   insert(order: Order) {
//     // insert
//   }

//   update(order: Order) {
//     // update
//   }
// }
