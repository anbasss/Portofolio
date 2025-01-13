import Image from 'next/image';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Sertifikat - My Portfolio',
  description: 'View my certificates and qualifications'
};

const Sertifikat = () => {
  const certificates = [
    {
      id: 1,
      title: "Web Development Certificate",
      issuer: "Dicoding Indonesia",
      year: "2023",
      image: "/certificates/cert1.jpg",
      description: "Front-end Web Development"
    },
    {
      id: 2,
      title: "JavaScript Programming",
      issuer: "Udemy",
      year: "2023",
      image: "/certificates/cert2.jpg",
      description: "Advanced JavaScript Programming"
    },
    // Add more certificates here
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#0D1B2A] pt-20 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">
            Sertifikat
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="bg-[#1B263B] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
              >
                <div className="aspect-[4/3] relative bg-gray-50 rounded-lg mb-4 overflow-hidden">
                  <Image 
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-blue-400 mb-2 font-medium">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-sm text-gray-300">{cert.description}</p>
                <div className="mt-4 flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sertifikat;
