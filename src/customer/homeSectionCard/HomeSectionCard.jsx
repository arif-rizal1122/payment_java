import React from 'react'




function HomeSectionCard() {
  return (
    <div className="cursor-pointer flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-[14rem] mx-3">
      
      {/* Bagian Gambar */}
      <div className="w-full h-[180px] bg-gray-100">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1761258772385-66e51635cf84"
          alt=""
        />
      </div>

      {/* Bagian Teks */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Notifier</h3>
        <p className="mt-1 text-sm text-gray-500">
          Men solid pure carton straight
        </p>
      </div>

    </div>
  );
}


export default HomeSectionCard