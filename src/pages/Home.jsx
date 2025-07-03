import Card from '../components/Card';

const Home = () => {
  return (
    <section className="space-y-6">
      <div className="bg-white dark:bg-gray-100 overflow-hidden shadow rounded-lg p-6">
      <div className="flex flex-col items-center justify-center">
      <Card title="Welcome to PLP Task Manager">
        <p>
          This is a simple yet powerful task management tool built with React,
          Tailwind CSS, and localStorage. It supports light/dark mode,
          filtering, and persistent state.
        </p>
      </Card>
      </div>
      </div>

      <Card title="Get Started">
        <p>
          Head over to the <strong>Tasks</strong> tab to start adding and
          managing your tasks.
        </p>
      </Card>
    </section>
  );
};

export default Home;
