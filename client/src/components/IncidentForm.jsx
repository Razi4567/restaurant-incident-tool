import { useState } from "react";
import axios from "axios";

function IncidentForm({ fetchIncidents }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    severity: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/incidents",
        formData
      );

      alert("Incident Submitted Successfully");

      fetchIncidents();

      setFormData({
        title: "",
        description: "",
        category: "",
        location: "",
        severity: "",
      });

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="bg-white p-6 rounded-xl shadow-md">

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Incident Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="location"
          placeholder="Store Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <select
          name="severity"
          value={formData.severity}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >

          <option value="">
            Select Severity
          </option>

          <option value="Low">
            Low
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="High">
            High
          </option>

          <option value="Critical">
            Critical
          </option>

        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Incident
        </button>

      </form>

    </div>
  );
}

export default IncidentForm;