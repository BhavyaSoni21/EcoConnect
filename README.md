
# EcoConnect

A comprehensive React-based platform promoting community engagement and awareness of the UN's 17 Sustainable Development Goals (SDGs).

## Features

- **17 SDG Goals**: Interactive cards with detailed information about each goal
- **Events Management**: Browse and register for sustainability events
- **Community Stories**: Share and read inspiring success stories
- **Resources Library**: Educational materials, videos, and quizzes
- **Volunteer Registration**: Sign up to contribute to SDG initiatives
- **User Dashboard**: Track personal engagement and activities
- **News Updates**: Latest sustainability news from India
- **Authentication**: Secure login/signup system (Firebase ready)

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Backend (Optional)**: Firebase (Auth, Firestore, Storage)
- **State Management**: React Context API

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecoconnect.git
cd ecoconnect
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Firebase (Optional)**
   - Create a Firebase project at https://firebase.google.com
   - Copy your Firebase config
   - Update `src/firebase/config.js` with your credentials

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## Project Structure

```
ecoconnect/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── GoalsPage.jsx
│   │   ├── StoriesPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── ResourcesPage.jsx
│   │   ├── VolunteerPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── DashboardPage.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   ├── sdgData.js
│   │   ├── eventsData.js
│   │   ├── storiesData.js
│   │   ├── newsData.js
│   │   ├── quizData.js
│   │   └── resourcesData.js
│   ├── firebase/
│   │   ├── config.js
│   │   ├── authHelpers.js
│   │   └── firestoreHelpers.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Usage

### Running Locally

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Create Firestore Database
5. Enable Storage
6. Copy configuration to `src/firebase/config.js`

### Firestore Collections Structure

**stories**
```javascript
{
  title: string,
  excerpt: string,
  content: string,
  category: string,
  image: string,
  author: string,
  authorId: string,
  createdAt: timestamp,
  likes: number
}
```

**eventRegistrations**
```javascript
{
  userId: string,
  eventId: string,
  userName: string,
  userEmail: string,
  registeredAt: timestamp
}
```

**volunteerApplications**
```javascript
{
  name: string,
  email: string,
  phone: string,
  sdgInterest: string,
  availability: string,
  skills: string,
  experience: string,
  motivation: string,
  submittedAt: timestamp,
  status: string
}
```

**contactMessages**
```javascript
{
  name: string,
  email: string,
  subject: string,
  message: string,
  submittedAt: timestamp,
  status: string
}
```

## Features Overview

### 1. Home Page
- Hero section with call-to-action buttons
- Impact statistics counter
- Mission statement
- Featured SDG goals
- Success stories preview
- Upcoming events preview

### 2. About Page
- Vision and mission
- Core values
- Why community engagement matters
- India's SDG commitment

### 3. Goals Page
- All 17 SDG cards with color coding
- Filter by category (Social, Economic, Environmental, Governance)
- Detailed modal for each goal with:
  - Global targets
  - India's progress
  - How to help
  - Related activities

### 4. Stories Page
- Grid view of community success stories
- Search and filter functionality
- Like/unlike stories
- Add new story modal (authenticated users)
- Full story view in modal

### 5. Events Page
- Upcoming events with registration
- Search and filter by category
- Event details (date, location, organizer)
- Registration tracking
- Latest sustainability news section

### 6. Resources Page
- Educational materials (PDFs, videos, articles)
- Filter by resource type
- Download tracking
- Interactive SDG quiz with:
  - Multiple choice questions
  - Instant feedback
  - Score tracking
  - Explanations

### 7. Volunteer Page
- Benefits of volunteering
- Application form with:
  - Personal information
  - SDG interest selection
  - Availability preferences
  - Skills and experience
  - Motivation statement

### 8. Contact Page
- Contact information
- Office hours
- Social media links
- Contact form with validation
- Success confirmation

### 9. Login/Signup Page
- Toggle between login and signup
- Email/password authentication
- Form validation
- Error handling
- Password reset option

### 10. Dashboard (Protected)
- User statistics
- Registered events overview
- Posted stories
- Estimated volunteer hours
- Quick action links

## Component Documentation

### AppContext
Central state management for:
- User authentication state
- Events data and registration
- Stories data and creation
- User activities tracking
- Persistent storage (localStorage)

### ProtectedRoute
Wrapper component for pages requiring authentication. Redirects to login if user not authenticated.

### Modal
Reusable modal component for displaying detailed content.

## Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'sdg-green': '#56C02B',
      'sdg-blue': '#00689D',
      'sdg-red': '#E5243B',
    },
  },
}
```

### SDG Data
Modify goals, progress, and activities in `src/data/sdgData.js`

### Events
Update events in `src/data/eventsData.js`

### Quiz Questions
Add/edit questions in `src/data/quizData.js`

## Deployment

### Vercel
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## Best Practices

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable names
- Add comments for complex logic
- Keep components modular and reusable

### State Management
- Use Context API for global state
- Use local state for component-specific data
- Implement proper error handling
- Validate user inputs

### Performance
- Lazy load images
- Implement pagination for large lists
- Use React.memo for expensive components
- Optimize re-renders

### Security
- Never commit Firebase credentials
- Use environment variables
- Validate all user inputs
- Implement proper authentication checks
- Sanitize data before storing

## Troubleshooting

### Common Issues

**Firebase not connecting:**
- Check Firebase config in `config.js`
- Verify Firebase project is active
- Check network connectivity
- Ensure Firebase services are enabled

**Tailwind styles not working:**
- Verify `tailwind.config.js` content paths
- Check `index.css` imports
- Clear cache and rebuild

**Routes not working:**
- Check React Router configuration
- Verify route paths match navigation
- Ensure BrowserRouter is wrapping App

**Authentication issues:**
- Clear localStorage
- Check Firebase Authentication settings
- Verify email/password provider is enabled

## Future Enhancements

- [ ] Email notifications for events
- [ ] Advanced search with filters
- [ ] User profiles with avatars
- [ ] Social sharing for stories
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Admin dashboard
- [ ] Analytics integration
- [ ] Payment gateway for donations
- [ ] Certificate generation for volunteers
- [ ] Gamification with badges
- [ ] Real-time chat for volunteers
- [ ] Event calendar view
- [ ] Export user data

## API Integration (Optional)

### News API
```javascript
// Example: Fetching SDG news
const fetchNews = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=sustainability+india&apiKey=YOUR_API_KEY`
  );
  const data = await response.json();
  return data.articles;
};
```

### EmailJS for Contact Form
```javascript
import emailjs from '@emailjs/browser';

const sendEmail = (formData) => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  );
};
```

## Testing

### Unit Tests (Jest + React Testing Library)
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm test
```

### E2E Tests (Cypress)
```bash
npm install --save-dev cypress
npx cypress open
```

## License

MIT License - feel free to use this project for educational purposes.

## Credits

- UN Sustainable Development Goals
- React Community
- Tailwind CSS
- Lucide Icons
- Firebase

## Contact

For questions or support:
- Email: support@ecoconnect.org
- GitHub Issues: [Create an issue](https://github.com/yourusername/ecoconnect/issues)

## Acknowledgments

- United Nations for SDG framework
- NITI Aayog for India-specific data
- All contributors and volunteers

---

Built with ❤️ for a sustainable future

