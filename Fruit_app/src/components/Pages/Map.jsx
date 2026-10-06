import React from "react";

function Map() {
  return (
    <div className="bg-white w-full py-10 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d104.8544354!3d11.6290212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109527b5a6c6599%3A0x947e61c3ff00c21d!2sACLEDA%20University%20of%20Business!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="ACLEDA University of Business"
          />
        </div>
      </div>
    </div>
  );
}

export default Map;
