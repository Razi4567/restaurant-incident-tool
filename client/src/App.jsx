import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

import ReportIncident from "./pages/ReportIncident";
import Dashboard from "./pages/Dashboard";

function App() {

  const [incidents, setIncidents] = useState([]);

  const fetchIncidents = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/incidents"
      );

      setIncidents(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchIncidents();

  }, []);

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        <nav className="bg-blue-600 text-white p-4 shadow-md">

          <div className="max-w-5xl mx-auto flex gap-6">

            <Link
              to="/"
              className="font-semibold hover:text-gray-200"
            >
              Report Incident
            </Link>

            <Link
              to="/dashboard"
              className="font-semibold hover:text-gray-200"
            >
              Dashboard
            </Link>

          </div>

        </nav>

        <div className="max-w-5xl mx-auto p-6">

          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Restaurant Incident Reporting Tool
          </h1>

          <Routes>

            <Route
              path="/"
              element={
                <ReportIncident
                  fetchIncidents={fetchIncidents}
                />
              }
            />

            <Route
              path="/dashboard"
              element={
                <Dashboard
                  incidents={incidents}
                  fetchIncidents={fetchIncidents}
                />
              }
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;