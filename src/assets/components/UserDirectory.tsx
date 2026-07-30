import { useEffect, useState } from "react";

type Address = {
  city: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  address: Address;
};

function UserDirectory() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data pengguna");
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Terjadi kesalahan saat mengambil data.");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h3>React Lanjutan - Fetch API</h3>
      <p>User Directory</p>

      <input
        className="search-input"
        type="text"
        placeholder="Cari nama pengguna..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p className="loading">Loading data...</p>}

      {error && <p className="form-error">{error}</p>}

      {!loading && !error && (
        <div className="user-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div className="user-item" key={user.id}>
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                  <small>{user.address.city}</small>
                </div>

                <button onClick={() => setSelectedUser(user)}>
                  Detail
                </button>
              </div>
            ))
          ) : (
            <p>Pengguna tidak ditemukan.</p>
          )}
        </div>
      )}

      {selectedUser && (
        <div className="user-detail">
          <h4>Detail User</h4>
          <p><strong>Nama:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Kota:</strong> {selectedUser.address.city}</p>
          <button onClick={() => setSelectedUser(null)}>Tutup</button>
        </div>
      )}
    </div>
  );
}

export default UserDirectory;