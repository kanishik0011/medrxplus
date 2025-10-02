# 🏥 Medrx+ Pharmacy Delivery Platform

A comprehensive digital pharmacy platform that enables prescription management, medicine ordering, and home delivery services with advanced features like OCR prescription processing, real-time order tracking, and administrative controls.

## ✨ Features

### 🔐 User Features
- **Secure Authentication**: Login/Register with JWT-based authentication
- **Prescription Upload**: OCR-powered prescription processing with automatic medicine extraction
- **Smart Search**: Advanced medicine search with filters and categories
- **Order Management**: Complete cart system with prescription-to-order conversion
- **Real-time Tracking**: Live order status updates and delivery tracking
- **User Dashboard**: Comprehensive account management with order history
- **Multiple Payment Options**: Integrated payment gateway with coupon support

### 👨‍⚕️ Admin Features
- **Inventory Management**: Complete medicine catalog management
- **Prescription Verification**: Pharmacist review and approval workflow
- **Order Processing**: Advanced order management with status tracking
- **Analytics Dashboard**: Business insights and performance metrics
- **User Management**: Customer account administration
- **Content Management**: Platform content and policy updates

### 🚀 Technical Features
- **OCR Technology**: Simulated OCR for prescription text extraction
- **Real-time Updates**: Socket.io for live notifications
- **File Upload**: Secure prescription image/PDF handling
- **API Integration**: RESTful APIs with comprehensive endpoints
- **Responsive Design**: Mobile-first UI with Tailwind CSS
- **Database Integration**: MongoDB with Mongoose ODM

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload handling
- **Socket.io** - Real-time communication

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)
- MongoDB (v5.0 or higher)
- Git

### Quick Start (Windows)
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medrx+
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   cd ..
   ```

3. **Configure environment variables**
   - Copy `.env.local.example` to `.env.local` (frontend)
   - Copy `backend/.env.example` to `backend/.env` (backend)
   - Update the environment variables with your configuration

4. **Start MongoDB**
   Make sure MongoDB is running on `localhost:27017`

5. **Launch the platform**
   ```bash
   # Option 1: Use the automated launcher
   start-platform.bat
   
   # Option 2: Manual start (separate terminals)
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   npm run dev
   ```

### Quick Start (Linux/Mac)
```bash
# Make the startup script executable
chmod +x start-platform.sh

# Run the platform
./start-platform.sh
```

## 🌐 Access URLs

- **Frontend Application**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **API Documentation**: http://localhost:5000/api/docs (if enabled)

## 📚 API Documentation

### Authentication Endpoints
```
POST /api/auth/register     - User registration
POST /api/auth/login        - User login
POST /api/auth/logout       - User logout
POST /api/auth/refresh      - Refresh JWT token
```

### Medicine Endpoints
```
GET  /api/medicines         - Get all medicines
GET  /api/medicines/search  - Search medicines
GET  /api/medicines/:id     - Get medicine by ID
GET  /api/medicines/category/:category - Get medicines by category
```

### Prescription Endpoints
```
POST /api/prescriptions/upload              - Upload prescription
GET  /api/prescriptions/my-prescriptions    - Get user's prescriptions
GET  /api/prescriptions/:id/status          - Get prescription status
POST /api/prescriptions/:id/verify          - Verify prescription (admin)
```

### Order Endpoints
```
POST /api/orders/create                     - Create new order
POST /api/orders/create-from-prescription   - Create order from prescription
GET  /api/orders/my-orders                  - Get user's orders
GET  /api/orders/:id                        - Get order details
POST /api/orders/:id/cancel                 - Cancel order
PUT  /api/orders/:id/status                 - Update order status (admin)
```

### User Endpoints
```
GET  /api/users/profile     - Get user profile
PUT  /api/users/profile     - Update user profile
GET  /api/users/addresses   - Get user addresses
POST /api/users/addresses   - Add new address
```

## 📁 Project Structure

```
medrx+/
├── src/                    # Frontend source code
│   ├── app/               # Next.js app directory
│   │   ├── (auth)/        # Authentication pages
│   │   ├── admin/         # Admin dashboard
│   │   ├── chat/          # AI chat feature
│   │   ├── dashboard/     # User dashboard
│   │   └── calendar/      # Calendar feature
│   ├── components/        # Reusable React components
│   │   ├── chat/          # Chat components
│   │   └── ui/            # UI components
│   ├── lib/               # Utility libraries
│   │   └── api.ts         # API client functions
│   └── store/             # State management
├── backend/               # Backend source code
│   ├── src/
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   ├── services/      # Business logic
│   │   └── server.js      # Main server file
│   └── package.json       # Backend dependencies
├── public/                # Static assets
├── .env.local             # Frontend environment variables
├── start-platform.bat     # Windows startup script
├── start-platform.sh      # Linux/Mac startup script
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Medrx+ Pharmacy Platform
NEXT_PUBLIC_RAZORPAY_KEY_ID=your-razorpay-key-id
```

#### Backend (backend/.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/medrx-plus
JWT_SECRET=your-jwt-secret-key
RAZORPAY_KEY_SECRET=your-razorpay-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🧪 Testing

### Run Frontend Tests
```bash
npm test
```

### Run Backend Tests
```bash
cd backend
npm test
```

### Run All Tests
```bash
npm run test:all
```

## 📱 Usage Guide

### For Users
1. **Register/Login**: Create an account or sign in
2. **Upload Prescription**: Take a photo or upload prescription PDF
3. **Review Extraction**: Check OCR-extracted medicines
4. **Add to Cart**: Review quantities and add items to cart
5. **Checkout**: Complete order with delivery details
6. **Track Order**: Monitor order status and delivery progress

### For Admins
1. **Access Admin Dashboard**: Login with admin credentials
2. **Manage Inventory**: Add/update medicine catalog
3. **Verify Prescriptions**: Review and approve prescriptions
4. **Process Orders**: Update order status and manage fulfillment
5. **View Analytics**: Monitor platform performance metrics

## 🚨 Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running on localhost:27017
- Check MongoDB service status
- Verify database URI in environment variables

**Port Already in Use**
- Kill processes using ports 3000 and 5000
- Use different ports in environment variables
- Restart the platform after changes

**File Upload Issues**
- Check file size limits (10MB default)
- Verify allowed file types (JPEG, PNG, PDF)
- Ensure upload directory permissions

**API Connection Failed**
- Verify backend server is running
- Check CORS configuration
- Confirm API URLs in frontend configuration

### Debug Mode
Enable debug logging by setting:
```env
LOG_LEVEL=debug
NEXT_PUBLIC_ENABLE_DEBUG=true
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team**: Medrx+ Developers
- **Contact**: support@medrxplus.com
- **Website**: https://medrxplus.com

## 🔄 Version History

- **v1.0.0** - Initial release with core features
  - User authentication and registration
  - Prescription upload and OCR processing
  - Medicine catalog and search
  - Order management and cart system
  - Admin dashboard with inventory management
  - Real-time notifications and tracking

## 🎯 Roadmap

- [ ] Mobile application (React Native)
- [ ] Advanced OCR with external services
- [ ] Real-time chat support
- [ ] Prescription reminder system
- [ ] Multi-pharmacy support
- [ ] Advanced analytics and reporting
- [ ] Integration with insurance providers
- [ ] Telemedicine consultation features

---

**Built with ❤️ for better healthcare accessibility**