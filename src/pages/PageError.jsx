import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import MetaTags from "../components/MetaTags";

function PageError() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container-fluid bg-black text-white p-0" style={{ height: "100vh" }}>
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <img src="/icon-dark.svg" alt="OCR Icon" style={{ width: "30%", height: "40%" }} />
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-4">The page you're looking for doesn't exist or has been deleted.</p>
                    <Button variant="primary" onClick={() => navigate("/")}>
                        Return to Home
                    </Button>
                </div>
            </div>
            <MetaTags title="Page Not Found | ScanPad" ogTitle="Page Not Found | ScanPad" ogUrl={window.location.href} canonicalUrl={window.location.href} twitterTitle="Page Not Found | ScanPad" />
        </>
    );
}

export default PageError;
