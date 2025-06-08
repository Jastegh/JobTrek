![Job Tracker Banner](https://user-images.githubusercontent.com/your-banner-here.png)

# Job Tracker 🧭

A personal job application tracker to help you stay organized during your job search. Track applications, update statuses, and manage resumes, all in one place.

<p align="center">
  <img src="https://github.com/user-attachments/assets/73f98d13-3e71-4109-a4c2-9e36292cddf3" width="380" />
</p>

---

## Features ✅

- 📂 **Application Tracking:** Keep detailed records of each job you've applied to.
- 🧠 **Status Updates:** Update progress as you move from Applied → Interview → Offer.
- 📁 **Resume Management:** Upload multiple versions of your resume.
- 📊 **Dashboard:** Clean UI showing your application stats at a glance.
- 🧭 **Built with Django + React:** Modern full-stack setup using Django REST Framework and React.

---

## Requirements 📦

- [Python 3.11+](https://www.python.org/downloads/)
- [Node.js 20+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## Setup & Install ⚙️

**Clone the repository:**

```bash
git clone https://github.com/Jastegh/JobTrek.git
cd job-tracker
```

### Backend Setup (Django):

**Create and activate a virtual environment:**

```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

**Install dependencies:**

```bash
pip install -r requirements.txt
```

**Run migrations and start the Django server:**

```bash
cd backend
python manage.py migrate
python manage.py runserver
```

The backend will run at: `http://localhost:8000`

---

### Frontend Setup (React):

**Open a new terminal, navigate to the `frontend` directory:**

```bash
cd frontend
```

**Install frontend dependencies:**

```bash
npm install
```

**Start the React app:**

```bash
npm start
```

The frontend will run at: `http://localhost:3000`

---

## Screenshots 🖼️

| Dashboard | Resume Manager |
|----------|----------------|
| ![Dashboard](https://user-images.githubusercontent.com/your-dashboard-thumb.png) | ![Resumes](https://user-images.githubusercontent.com/your-resume-thumb.png) |

---

## Built With 🛠️

- React
- Django
- Django REST Framework
- SQLite
- Bootstrap 5

---
