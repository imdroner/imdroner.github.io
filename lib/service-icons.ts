import { Camera, Building2, Zap, Radio, Shield, Sprout, Fuel, Film } from 'lucide-react';
import type React from 'react';

export const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Building2,
  Zap,
  Radio,
  Shield,
  Sprout,
  Fuel,
  Film,
};
