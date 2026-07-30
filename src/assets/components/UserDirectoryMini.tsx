import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

const customNames = [
  "Sabila Bunga Sakinah",
  "Ari Sigit Firdaus",
  "Muhammad Alghifari",
  "Siti Khumaera Mulyasari",
  "Salwa Mutiara Hikmah",
  "Nadilla Pristiani",
  "Aneira Huwaida Salsabila",
  "Reysha Almaghfira",
  "Aliya",
  "Ireena Feriska"
];

function UserDirectoryMini() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data user");
        }
        return response.json();
      })
      .then((data: User[]) => {
        const updatedUsers = data.map((user, index) => ({
          ...user,
          name: customNames[index] || user.name
        }));

        setUsers(updatedUsers);
        setLoading(false);
      })
      .catch(() => {
        setError("Terjadi kesalahan saat mengambil data user.");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="directory">
      <div className="directory-header">
        <p className="subtitle">React Lanjutan • Mini Project</p>
        <h1>User Directory</h1>
        <p className="description">
          Cari pengguna dan lihat informasi detailnya.
        </p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Cari nama pengguna..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {loading && (
        <div className="status">
          <p>Loading data pengguna...</p>
        </div>
      )}

      {error && (
        <div className="status error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="user-grid">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="user-info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <span>{user.address.city}</span>
                </div>

                <button onClick={() => setSelectedUser(user)}>
                  Lihat Detail
                </button>
              </div>
            ))
          ) : (
            <div className="status">
              <p>Pengguna tidak ditemukan.</p>
            </div>
          )}
        </div>
      )}

      {selectedUser && (
        <div className="detail-card">
          <div className="detail-header">
            <h2>Detail User</h2>
            <button onClick={() => setSelectedUser(null)}>×</button>
          </div>

          <div className="detail-content">
            <p><strong>Nama</strong>{selectedUser.name}</p>
            <p><strong>Email</strong>{selectedUser.email}</p>
            <p><strong>Kota</strong>{selectedUser.address.city}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDirectoryMini;