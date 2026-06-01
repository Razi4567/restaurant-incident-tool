import { useState } from "react";
import IncidentList from "../components/IncidentList";

function Dashboard({ incidents, fetchIncidents }){

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState("");

  const filteredIncidents = incidents.filter((incident) => {

    const matchesSearch =
      incident.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      incident.category === selectedCategory;

    const matchesSeverity =
      selectedSeverity === "" ||
      incident.severity === selectedSeverity;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSeverity
    );
  });

  return (
    <div>

      <h2>Incident Dashboard</h2>

      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <br /><br />

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
      >

        <option value="">
          All Categories
        </option>

        <option value="POS Issue">
          POS Issue
        </option>

        <option value="Delivery Delay">
          Delivery Delay
        </option>

        <option value="Inventory">
          Inventory
        </option>

        <option value="Kitchen Equipment">
          Kitchen Equipment
        </option>

      </select>

      <br /><br />

      <select
        value={selectedSeverity}
        onChange={(e) =>
          setSelectedSeverity(e.target.value)
        }
      >

        <option value="">
          All Severities
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

      <br /><br />

      <IncidentList
        incidents={filteredIncidents}
        fetchIncidents={fetchIncidents}
     />

    </div>
  );
}

export default Dashboard;