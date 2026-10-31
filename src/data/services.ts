import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'ct-scan',
    title: 'Advance 96 Multislice CT Scan',
    shortDesc: 'High-resolution 96-slice CT for brain, chest, abdomen, spine, joints, and full-body imaging with 3D reconstruction capabilities.',
    fullDesc: 'Our cutting-edge 96 Multislice CT Scanner delivers unprecedented diagnostic precision with sub-millimeter anatomical detail. Designed with advanced ultra-low-dose radiation protocols and high-speed gantry rotation, it captures clear images even in moving organs. From acute neurological assessments to full-body oncological screenings, our system provides doctors with rapid, dependable volumetric insights.',
    iconName: 'Activity',
    image: '/assets/img/departments-1.jpg',
    features: [
      'Sub-second 96-slice high-definition volumetric scanning',
      'Ultra-low radiation dosage protocols for patient safety',
      '3D vascular angiography (Cerebral, Peripheral, Renal & Abdominal)',
      'High-resolution chest CT (HRCT) for subtle lung pathologies',
      'Multi-planar bone and joint reconstruction for complex trauma'
    ],
    preparation: [
      'For contrast-enhanced CT (CECT), fast for 4 to 6 hours prior to the scan.',
      'Recent serum creatinine report (within 30 days) is required for contrast studies.',
      'Wear loose, comfortable clothing without metal fasteners or jewelry.',
      'Inform staff if you are diabetic, take metformin, or have known contrast allergies.'
    ],
    whyChooseThis: [
      'Expert interpretation directly by Dr. Sher Singh Gangwar (MBBS, MD, DNB)',
      'Rapid emergency same-day reporting for acute conditions',
      'High patient comfort bore with reduced claustrophobic sensation'
    ],
    turnaroundTime: 'Same Day / within 24 Hours for complex 3D angio',
    category: 'radiology'
  },
  {
    id: '2',
    slug: 'ultrasound-logic-totus',
    title: 'Advanced Logic Totus Ultrasound',
    shortDesc: 'Cutting-edge ultrasound system providing detailed fetal and cardiac imaging for prenatal diagnostics.',
    fullDesc: 'Equipped with next-generation acoustic architecture and multi-frequency matrix probes, the Advanced Logic Totus Ultrasound system sets the gold standard for clinical ultrasonography in Bareilly. It delivers unmatched tissue contrast resolution, penetrating deep structures while maintaining fine micro-vascular visualization for obstetric, abdominal, musculoskeletal, and superficial organ scans.',
    iconName: 'Waves',
    image: '/assets/img/departments-2.jpg',
    features: [
      'High-density matrix array probes for deep tissue differentiation',
      'Comprehensive prenatal anomaly scanning and biometric profiling',
      'High-resolution thyroid, breast, and scrotal small-part imaging',
      'Musculoskeletal (MSK) tendon and ligament dynamic ultrasound',
      'Automated follicular monitoring and pelvic health evaluation'
    ],
    preparation: [
      'For Abdominal Ultrasound: Fast for 6 to 8 hours prior to the examination.',
      'For Pelvic / Obstetric (early pregnancy) / KUB Ultrasound: Drink 4-5 glasses of water 1 hour prior and hold urine to ensure a full bladder.',
      'No fasting required for thyroid, neck, or musculoskeletal scans.'
    ],
    whyChooseThis: [
      'Performed with strict hygiene and high-grade sanitized transducers',
      'Real-time explanation by experienced senior ultrasonologist',
      'Crystal-clear digital printouts and high-definition thermal reports'
    ],
    turnaroundTime: 'Immediate within 30–60 minutes',
    category: 'ultrasound'
  },
  {
    id: '3',
    slug: 'fibroscan',
    title: 'Fibroscan (Transient Elastography)',
    shortDesc: 'Non-invasive liver scan to assess fibrosis and fat content in the liver, ideal for early detection of liver diseases.',
    fullDesc: 'Fibroscan is the gold-standard non-invasive technology for assessing liver stiffness (fibrosis) and steatosis (controlled attenuation parameter - CAP). Unlike conventional liver biopsies that involve painful needles and hospital stays, Fibroscan provides a pain-free, rapid numerical assessment of liver health in just 10 minutes, making it indispensable for fatty liver, hepatitis, and metabolic syndrome management.',
    iconName: 'ShieldCheck',
    image: '/assets/img/departments-3.jpg',
    features: [
      '100% Non-invasive, painless procedure without needles or incisions',
      'Simultaneous quantification of liver fibrosis and steatosis (fat fraction)',
      'Immediate numeric scoring correlating with METAVIR staging',
      'Essential for monitoring NAFLD, NASH, hepatitis B/C, and alcoholic liver injury',
      'Repeatable at regular intervals to monitor clinical response'
    ],
    preparation: [
      'Strictly fast (no food or liquids other than small sips of water) for at least 3 hours prior to the scan.',
      'Wear comfortable two-piece clothing allowing easy access to the right upper abdomen.',
      'Bring your previous liver function test (LFT) reports and ultrasound records.'
    ],
    whyChooseThis: [
      'Painless alternative to invasive needle liver biopsies',
      'Validated diagnostic technology trusted by gastroenterologists worldwide',
      'Immediate quantitative report generated at conclusion of scan'
    ],
    turnaroundTime: 'Immediate upon test completion',
    category: 'liver'
  },
  {
    id: '4',
    slug: 'fetal-echocardiography',
    title: 'Fetal Echocardiography',
    shortDesc: 'Specialized ultrasound for detailed assessment of fetal heart structure and function to detect congenital anomalies early.',
    fullDesc: 'Fetal Echocardiography is a highly dedicated ultrasound examination focused specifically on the developing cardiovascular system of the fetus. Typically recommended between 18 and 24 weeks of pregnancy, this study examines cardiac chambers, valves, outflow tracts, rhythm, and hemodynamic velocities to identify congenital heart defects (CHDs) early, enabling timely obstetric and pediatric cardiac planning.',
    iconName: 'HeartPulse',
    image: '/assets/img/departments-4.jpg',
    features: [
      'Detailed four-chamber, outflow tract, and aortic arch assessment',
      'Color and pulsed-wave Doppler evaluation of fetal intracardiac hemodynamics',
      'Fetal rhythm and conduction analysis to identify arrhythmias',
      'Crucial for IVF pregnancies, gestational diabetes, or family history of heart defects',
      'Conducted with gentle, non-stress maternal positioning'
    ],
    preparation: [
      'Optimal gestational window is between 18 and 22 weeks of pregnancy.',
      'No fasting or bladder filling is necessary.',
      'Bring all previous anomaly scan (Level II) and obstetric records.'
    ],
    whyChooseThis: [
      'Evaluated by Dr. Sher Singh Gangwar with specialized fetal imaging expertise',
      'Compassionate environment prioritizing maternal comfort and peace of mind',
      'Comprehensive cardiac report with clear visual diagrams'
    ],
    turnaroundTime: 'Same Day within 1–2 hours',
    category: 'cardiac'
  },
  {
    id: '5',
    slug: '4d-3d-ultrasound',
    title: '4D / 3D Live Ultrasound',
    shortDesc: 'Real-time imaging that provides detailed and moving visuals of the fetus, enhancing pregnancy monitoring and bonding.',
    fullDesc: 'Experience the magic of seeing your unborn baby in lifelike 3D surface detail and real-time 4D movement. Beyond the joy of parental bonding, 4D/3D ultrasonography provides critical clinical value by enabling multi-planar scrutiny of subtle anatomical landmarks, including the fetal facial profile, cleft lip/palate screening, extremities, spine, and surface morphology.',
    iconName: 'Sparkles',
    image: '/assets/img/departments-5.jpg',
    features: [
      'Photorealistic surface rendering with realistic flesh-tone depth',
      'Live cinematic 4D movement capturing yawns, stretches, and smiles',
      'Enhanced anatomical assessment of facial features, hands, and feet',
      'Multi-planar coronal, sagittal, and transverse diagnostic slicing',
      'High-resolution keepsake images for expecting parents'
    ],
    preparation: [
      'Best performed between 24 and 30 weeks of pregnancy for clear facial views.',
      'Drink plenty of water over the 2-3 days leading up to your scan to optimize amniotic fluid clarity.',
      'Have a light snack or fruit juice 20 minutes prior to encourage gentle fetal movement.'
    ],
    whyChooseThis: [
      'State-of-the-art volumetric rendering engines',
      'Warm, reassuring clinical atmosphere designed for expecting parents',
      'High-definition digital photos included with report'
    ],
    turnaroundTime: 'Immediate upon test completion',
    category: 'ultrasound'
  },
  {
    id: '6',
    slug: 'color-doppler',
    title: 'Color Doppler Vascular Studies',
    shortDesc: 'Ultrasound-based blood flow analysis in vessels and organs for accurate vascular and cardiac assessments.',
    fullDesc: 'Color Doppler utilizes high-frequency sound waves reflected off moving red blood cells to produce color-coded maps of blood flow velocity and direction throughout arterial and venous networks. It is crucial for detecting deep vein thrombosis (DVT), carotid arterial stenosis, peripheral vascular disease, varicose veins, and maternal-fetal placental insufficiency.',
    iconName: 'Radio',
    image: '/assets/img/departments-1.jpg',
    features: [
      'Obstetric Doppler: Umbilical, Uterine, and Middle Cerebral Artery (MCA) flow',
      'Peripheral Arterial & Venous Doppler for limbs (DVT & Varicose vein mapping)',
      'Carotid & Vertebral Doppler for stroke risk screening and plaque evaluation',
      'Renal Artery Doppler for renovascular hypertension workup',
      'Portal Venous System Doppler for portal hypertension assessment'
    ],
    preparation: [
      'For Renal / Abdominal Doppler: 6 to 8 hours overnight fasting required.',
      'For Extremity (Legs/Arms) and Carotid Doppler: No fasting or special preparation needed.',
      'Wear loose clothing that allows easy access to the limbs or neck.'
    ],
    whyChooseThis: [
      'Sensitive acoustic detection of sluggish flow and partial thromboses',
      'Calculates accurate resistive indices (RI) and pulsatility indices (PI)',
      'Immediate clinical alerts provided for acute deep vein thrombosis'
    ],
    turnaroundTime: 'Same Day within 1–2 hours',
    category: 'radiology'
  },
  {
    id: '7',
    slug: 'digital-x-ray',
    title: 'High-Frequency Digital X-Ray',
    shortDesc: 'High-quality digital X-ray imaging for chest, bones, joints, and soft tissues with instant results and minimal radiation exposure.',
    fullDesc: 'Our modern High-Frequency Digital Radiography (DR) suite produces crystal-clear, high-contrast digital images within seconds. Operating at significantly lower radiation doses than conventional screen-film radiography, our digital detector delivers sharp edge enhancement for chest, musculoskeletal, spine, and specialized barium and urographic diagnostic investigations.',
    iconName: 'ScanLine',
    image: '/assets/img/services.jpg',
    features: [
      'Instantaneous digital acquisition with minimal radiation exposure',
      'Comprehensive chest radiography for pulmonary and cardiac evaluations',
      'Orthopedic skeletal series for fractures, dislocations, and degenerative arthritis',
      'Special procedures: Barium Swallow/Meal, IVP, MCU, RGU, and HSG',
      'Digital post-processing with zoom, edge enhancement, and electronic archival'
    ],
    preparation: [
      'Routine X-Rays: No prior preparation required; remove metal chains, pins, and belts.',
      'Special procedures (IVP/HSG/Barium): Please contact our reception for tailored bowel prep guidelines.',
      'Always inform the radiographer if there is any possibility of pregnancy.'
    ],
    whyChooseThis: [
      'Minimal patient wait times with zero darkroom chemical delays',
      'Laser-printed diagnostic film sheets and digital copies available',
      'Dedicated pediatric and geriatric supportive positioning aids'
    ],
    turnaroundTime: 'Within 20–30 minutes',
    category: 'radiology'
  },
  {
    id: '8',
    slug: 'ecg-echocardiography',
    title: '12-Lead ECG & Echocardiography',
    shortDesc: 'Complete heart health evaluation including electrical activity (ECG) and structural imaging (ECHO) to detect arrhythmias and heart diseases.',
    fullDesc: 'We offer integrated cardiac diagnostics combining high-precision computerized 12-lead Electrocardiography (ECG) with 2D Transthoracic Echocardiography with Color Doppler. This dual assessment captures the hearts real-time electrical conduction rhythm alongside structural valve integrity, chamber dimensions, myocardial wall motion, and ejection fraction (EF).',
    iconName: 'Heart',
    image: '/assets/img/features.jpg',
    features: [
      'High-speed digital 12-lead ECG with computerized rhythm rhythm-strip analysis',
      '2D Transthoracic Echocardiography with M-Mode and Color Flow Doppler',
      'Accurate ejection fraction (EF) and left ventricular systolic/diastolic profiling',
      'Valvular stenosis, regurgitation, and pericardial effusion identification',
      'Pre-operative cardiac clearance and hypertension monitoring'
    ],
    preparation: [
      'No fasting required for routine ECG or Echocardiography.',
      'Wear a comfortable two-piece button-front shirt or loose top for easy electrode placement.',
      'Avoid heavy caffeine or strenuous exercise immediately before your test.'
    ],
    whyChooseThis: [
      'Immediate computerized ECG printouts available on arrival',
      'Detailed echocardiographic analysis of cardiac function',
      'Clean, comfortable, private examination environment'
    ],
    turnaroundTime: 'Immediate for ECG / Same Day for Echo',
    category: 'cardiac'
  }
];
