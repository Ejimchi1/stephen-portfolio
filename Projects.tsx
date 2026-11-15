import React from 'react';
import { motion } from 'motion/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const locations = [
  { 
    id: 'katampe', 
    name: 'Katampe Extension', 
    role: 'The Diplomatic Zone', 
    desc: 'Known as "Abuja\'s New Maitama". Offers panoramic city views from the hilltop and strategic proximity to IBB Way. High capital appreciation guaranteed.', 
    position: [9.10, 7.45] as [number, number] 
  },
  { 
    id: 'guzape', 
    name: 'Apo / Guzape', 
    role: 'The Beverly Hills', 
    desc: 'Elite rocky terrain providing breathtaking views. Borders Asokoro and serves as the preferred hub for luxury residential developments.', 
    position: [9.01, 7.48] as [number, number] 
  },
  { 
    id: 'karsana', 
    name: 'Karsana', 
    role: 'Strategic Expansion', 
    desc: 'Located along the Kubwa Expressway. A key part of Abuja\'s Phase 4 expansion with massive infrastructural investment and modern gated communities.', 
    position: [9.09, 7.35] as [number, number] 
  },
  { 
    id: 'idu', 
    name: 'Idu (Petra Courts)', 
    role: 'Logistics Hub', 
    desc: 'Home to the Idu Train Station and Industrial Zone. Proximity to the railway terminal makes it a high-demand node for mixed-use investments.', 
    position: [9.04, 7.38] as [number, number] 
  },
  { 
    id: 'lifecamp', 
    name: 'Life Camp', 
    role: 'Established Luxury', 
    desc: 'A serene residential hub close to Jabi Lake. Features a high expatriate population and consistent, high-yield rental demand.', 
    position: [9.07, 7.41] as [number, number] 
  },
  { 
    id: 'kabusa', 
    name: 'Kabusa (Highland City)', 
    role: 'Emerging Frontier', 
    desc: 'Strategic entry point near Galadimawa. Rapid infrastructural development is turning this corridor into a hotspot for affordable luxury.', 
    position: [8.96, 7.42] as [number, number] 
  },
  { 
    id: 'pearl', 
    name: 'Pearl Estate', 
    role: 'Airport Corridor', 
    desc: 'Prime location along the Airport Road. Offers seamless connectivity to the International Airport and the Abuja city center.', 
    position: [8.99, 7.39] as [number, number] 
  },
  { 
    id: 'ecoview', 
    name: 'Eco View', 
    role: 'Sustainable Living', 
    desc: 'Pioneering eco-friendly residential designs. Focused on solar integration and green architecture for the conscious modern investor.', 
    position: [9.02, 7.44] as [number, number] 
  },
  { 
    id: 'ketti', 
    name: 'Ketti Peninsula', 
    role: 'The Peninsula Escape', 
    desc: 'Unique Apo-extension landscape offering waterfront potential and high-end privacy away from the city hustle.', 
    position: [8.95, 7.41] as [number, number] 
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="track-record" className="p-10 md:p-16 border-b border-[#EEE]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
        
        <div className="order-2 lg:order-1 h-[400px] border border-[#EEE] bg-brand-gray z-10 relative">
          <MapContainer 
            center={[9.03, 7.43]} 
            zoom={11} 
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {locations.map((loc) => (
              <Marker key={loc.id} position={loc.position}>
                <Popup>
                  <div className="p-2 max-w-[200px]">
                    <strong className="block text-brand-navy text-[14px] font-bold mb-1">{loc.name}</strong>
                    <span className="block text-brand-gold text-[10px] font-bold uppercase tracking-[1px] mb-2">{loc.role}</span>
                    <span className="block text-[#666] text-[12px] leading-[1.5]">{loc.desc}</span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-[18px] text-brand-navy mb-4">Abuja Market Footprint</h3>
            <p className="text-[13px] text-[#444] leading-[1.7] mb-6">
              Emerging investment corridors and established districts where we've facilitated strategic acquisitions and developments.
            </p>
            
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {locations.map((loc) => (
                <div key={loc.id} className="p-4 bg-brand-gray border border-[#EEE] hover:border-brand-gold transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[12px] font-bold text-brand-navy uppercase tracking-[1px]">{loc.name}</h4>
                    <span className="text-[9px] font-bold text-brand-gold uppercase tracking-[1px] bg-white px-2 py-0.5 border border-brand-gold/20">{loc.role}</span>
                  </div>
                  <p className="text-[11px] text-[#666] leading-[1.6]">
                    {loc.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
