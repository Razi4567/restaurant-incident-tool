import axios from "axios";

function IncidentList({incidents,fetchIncidents}){

  const updateStatus = async (id, newStatus) => {

    try {

      await axios.put(
        `https://restaurant-api-hkvh.onrender.com/api/incidents/${id}`,
        {
          status: newStatus,
        }
      );

      fetchIncidents();

    } catch (error) {

      console.log(error);

    }
  };

  const getSeverityColor = (severity) => {

    switch (severity) {

      case "Low":
        return "bg-green-200 text-green-800";

      case "Medium":
        return "bg-yellow-200 text-yellow-800";

      case "High":
        return "bg-orange-200 text-orange-800";

      case "Critical":
        return "bg-red-200 text-red-800";

      default:
        return "bg-gray-200";
    }
  };

  const getStatusColor = (status) => {

    switch (status) {

      case "Open":
        return "bg-gray-200 text-gray-800";

      case "In Progress":
        return "bg-blue-200 text-blue-800";

      case "Resolved":
        return "bg-green-200 text-green-800";

      default:
        return "bg-gray-200";
    }
  };

  return (

    <div className="grid gap-4">

      {
        
        incidents.map((incident) => (

          <div
            key={incident._id}
            className="bg-white p-5 rounded-xl shadow-md"
          >

            <div className="flex justify-between items-center mb-3">

              <h3 className="text-xl font-bold">
                {incident.title}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(incident.severity)}`}
              >
                {incident.severity}
              </span>

            </div>

            <p className="mb-2">
              {incident.description}
            </p>

            <p>
              <strong>Category:</strong>
              {" "}
              {incident.category}
            </p>

            <p>
              <strong>Location:</strong>
              {" "}
              {incident.location}
            </p>

            <div className="mt-3 flex justify-between items-center">

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(incident.status)}`}
              >
                {incident.status}
              </span>

              <select
                value={incident.status}
                onChange={(e) =>
                  updateStatus(
                    incident._id,
                    e.target.value
                  )
                }
                className="border p-2 rounded-lg"
              >

                <option value="Open">
                  Open
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Resolved">
                  Resolved
                </option>

              </select>

            </div>

          </div>
        ))
      }

    </div>
  );
}

export default IncidentList;