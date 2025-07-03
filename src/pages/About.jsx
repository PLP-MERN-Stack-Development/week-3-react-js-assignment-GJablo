import Card from '../components/Card';

const About = () => {
  return (
    <section>
      <Card title="About This App">
        <p>
          The PLP Task Manager was created as a learning project to explore
          modern frontend practices including:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>React + Vite for blazing fast development</li>
          <li>Reusable UI components</li>
          <li>Persistent localStorage data</li>
          <li>API integration</li>
          <li>Responsive design with Tailwind</li>
        </ul>
      </Card>
    </section>
  );
};

export default About;
