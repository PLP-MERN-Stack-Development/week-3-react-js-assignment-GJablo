import PropTypes from 'prop-types';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 ${className}`}>
      {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
