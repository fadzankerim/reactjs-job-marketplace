import React from 'react'
import HomePage from './pages/HomePage';
import { Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobs from './pages/AddJobs';
import EditJob from './pages/EditJob';






const App = () => {


  const addJob = async (newJob) =>{

    //Adding a new job 
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //Delete job

  const deleteJob = async ( id ) => {
      const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  // Update job

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {index: true,element: <HomePage />},
        {path: '/jobs', element: <JobsPage />},
        {path: '/add-job', element: <AddJobs addJobSubmit={addJob} />},
        {path: '/jobs/:id', element: <JobPage deleteJob={deleteJob}/>, loader: jobLoader},
        {path: '/edit-job/:id', element: <EditJob updateJobSubmit={updateJob}/>, loader: jobLoader},
        {path: '*', element: <NotFoundPage />}
      ]
    }
  ]);


  return <RouterProvider router={router} />
};

export default App