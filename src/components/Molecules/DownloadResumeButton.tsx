import Button from "../Atoms/Button";

export default function DownloadResumeButton() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/Resume-Thomas-Beckford-2023.pdf");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Resume-Thomas-Beckford-2023.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <Button
      className="bg-blue-800 hover:bg-blue-600 rounded-lg border-none text-white drop-shadow-lg transition-all"
      rounded
      onClick={handleDownload}
    >
      Download my resume
    </Button>
  );
}
