import IncidentForm from "../components/IncidentForm";

function ReportIncident({ fetchIncidents }) {

  return (
    <div>

      <h2>Report Incident</h2>

      <IncidentForm fetchIncidents={fetchIncidents} />

    </div>
  );
}

export default ReportIncident;