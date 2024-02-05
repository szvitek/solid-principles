interface Database {
  save(order: Order): void
}

class SQLDatabase implements Database {
  save(order: Order): void {
    if (order.id === undefined) {
      // insert
    } else {
      // update
    }
  }
}

class MongoDatabase implements Database {
  save(order: Order): void {
    if (order.id === undefined) {
      // insert
    } else {
      // update
    }
  }
}

// Now we can add new databases without modifying the OrderService class.
class OrderService {
  constructor(private database: Database) {}

  save(order: Order): void {
    this.database.save(order);
  }
}

const sqlOrderService = new OrderService(new SQLDatabase());
const mongoOrderService = new OrderService(new MongoDatabase())