// src/pages/AboutPage.jsx
import React from 'react';
import { Target, Users, Globe, Heart, TrendingUp, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Purpose-Driven",
      description: "Every action we take is aligned with the UN's Sustainable Development Goals"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community-First",
      description: "We believe in the power of collective action and grassroots movements"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Globally Minded",
      description: "Think globally, act locally - connecting local efforts with global goals"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Compassionate",
      description: "Driven by empathy and the desire to create positive social impact"
    }
  ];

  const initiatives = [
    { name: "NITI Aayog", description: "Coordinating SDG implementation across states and districts" },
    { name: "SDG India Index", description: "Tracking progress at state and district levels" },
    { name: "Swachh Bharat", description: "Aligning with SDGs 6, 11, and 12 for cleanliness" },
    { name: "Digital India", description: "Bridging the digital divide (SDG 9)" },
    { name: "Ayushman Bharat", description: "Universal health coverage (SDG 3)" },
    { name: "Beti Bachao Beti Padhao", description: "Gender equality and women empowerment (SDG 5)" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About EcoConnect</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering communities to achieve sustainable development through collective action
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-700">Our Vision</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To create a vibrant community of changemakers who actively contribute to achieving 
              the United Nations' 17 Sustainable Development Goals, making India a global leader 
              in sustainable development and social progress. We envision a future where every 
              individual, regardless of their background, has the opportunity to participate in 
              building a sustainable and equitable society.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We strive to empower individuals and communities by:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Providing accessible information</strong> about SDGs and their relevance 
                  to India's development journey
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Connecting volunteers</strong> with meaningful community initiatives 
                  aligned with sustainable development
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Facilitating knowledge sharing</strong> through success stories and 
                  best practices from across the nation
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Creating opportunities</strong> for collective action on pressing 
                  sustainability challenges
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p className="text-gray-700">
                  <strong>Building partnerships</strong> between citizens, NGOs, educational 
                  institutions, and government bodies
                </p>
              </div>
            </div>
          </div>

          {/* Community Engagement Section */}
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
                Why Community Engagement Matters
              </h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Community engagement is the cornerstone of sustainable development. When individuals 
                come together with a shared purpose, they create ripple effects that transform societies. 
                The power of collective action cannot be underestimated.
              </p>
              <p className="text-lg leading-relaxed">
                In India, grassroots movements have always been powerful catalysts for change. From 
                the Chipko movement that protected forests to self-help groups that empowered women 
                economically, communities have demonstrated time and again that collective action can 
                address complex challenges like poverty, inequality, and environmental degradation.
              </p>
              <p className="text-lg leading-relaxed">
                By participating in SDG-aligned activities, you're not just contributing to global 
                goals—you're building a more equitable, sustainable, and prosperous future for your 
                community and nation. Every volunteer hour, every tree planted, every child educated, 
                and every life touched creates a multiplier effect that extends far beyond the immediate impact.
              </p>
              <div className="bg-white rounded-lg p-6 mt-6">
                <p className="text-xl font-semibold text-gray-800 italic">
                  "Never doubt that a small group of thoughtful, committed citizens can change the world; 
                  indeed, it's the only thing that ever has." - Margaret Mead
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These principles guide everything we do and every decision we make
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center text-green-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India's SDG Commitment Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">India's SDG Commitment</h2>
            </div>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              India has integrated the SDGs into its national development agenda and is making 
              significant strides across multiple goals. The government has launched several 
              flagship initiatives that directly contribute to achieving the SDGs:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <div 
                  key={index} 
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition"
                >
                  <h3 className="text-xl font-bold mb-2">{initiative.name}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{initiative.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
              <p className="text-lg">
                <strong>SDG India Index:</strong> India has developed a comprehensive monitoring 
                framework with the SDG India Index, which tracks progress across states and union 
                territories. This data-driven approach helps identify areas needing attention and 
                celebrates successes, ensuring accountability and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a growing community committed to creating lasting positive change
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/volunteer" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition transform hover:scale-105"
            >
              Become a Volunteer
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-700 transition transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;