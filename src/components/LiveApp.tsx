import "./LiveApp.css"

interface LiveAppProps {
  siteUrl: string;
}

const LiveApp: React.FC<LiveAppProps> = ({ siteUrl }) => {
  return (
    <div className="live-app-container">
      <iframe
        src={siteUrl} 
        title="Univents"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default LiveApp;
