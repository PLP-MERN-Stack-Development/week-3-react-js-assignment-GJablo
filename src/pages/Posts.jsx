import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }, [query, posts]);

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Posts</h2>
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
        />
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((post) => (
          <Card key={post.id} title={post.title}>
            <p>{post.body.slice(0, 100)}...</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Posts;
