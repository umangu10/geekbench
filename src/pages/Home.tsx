import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to GeekBench
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Your platform for learning and practicing programming skills. Access courses, labs, and challenges.
              </p>
              <div className="space-x-4">
                <Link to="/courses" className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90">
                  Browse Courses
                </Link>
                <Link to="/labs" className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100">
                  Explore Labs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Introduction to Programming",
                  description: "Learn the basics of programming with hands-on exercises",
                  level: "Beginner"
                },
                {
                  title: "Web Development",
                  description: "Master modern web development technologies",
                  level: "Intermediate"
                },
                {
                  title: "Advanced Algorithms",
                  description: "Deep dive into complex algorithms and data structures",
                  level: "Advanced"
                }
              ].map((course, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                    {course.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Basic",
                  description: "For beginners",
                  price: "$19/mo",
                  features: [
                    "Access to basic courses",
                    "Community support",
                    "Monthly assessments"
                  ]
                },
                {
                  title: "Pro",
                  description: "For serious learners",
                  price: "$49/mo",
                  features: [
                    "Access to all courses",
                    "Priority support",
                    "Certification prep",
                    "Unlimited assessments"
                  ]
                },
                {
                  title: "Enterprise",
                  description: "For teams",
                  price: "Custom",
                  features: [
                    "Custom learning paths",
                    "Dedicated support",
                    "Team analytics",
                    "API access"
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2024 GeekBench. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms</Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900">Privacy</Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 