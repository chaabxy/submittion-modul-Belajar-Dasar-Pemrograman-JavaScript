// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menyimpan data pesanan
let orders = [];

// Menambahkan pesanan baru
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const totalPrice = items.reduce((sum, item) => sum + (item.price || 0), 0);

  const newOrder = {
    id,
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };

  orders.push(newOrder);
  return newOrder;
}

// Memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const update = orders.find((order) => order.id === orderId);
  update.status = status;
}

// Menghitung total pendapatan dari pesanan yang berstatus "Selesai"
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Menghapus pesanan berdasarkan ID
function deleteOrder(id) {
  orders.splice(
    orders.findIndex((order) => order.id === id),
    1
  );
}


// Ekspor fungsi agar bisa digunakan di file lain
export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
