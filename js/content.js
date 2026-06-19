/* Archivo: js/content.js */
const pageData = {
    introduccion: {
        titulo: "Introducción a los Sistemas Operativos",
        contenido: "Un Sistema Operativo (SO) es el software principal de un sistema informático que gestiona los recursos de hardware y provee servicios a los programas de aplicación."
    },
    tipos: [
        {
            id: "desktop",
            titulo: "SO de Escritorio",
            descripcion: "Diseñados para uso en computadoras personales.",
            caracteristicas: ["Interfaz gráfica amigable", "Multitarea", "Gestión de periféricos"]
        },
        {
            id: "mobile",
            titulo: "SO Móviles",
            descripcion: "Optimizados para dispositivos con pantallas táctiles y batería limitada.",
            caracteristicas: ["Eficiencia energética", "Tienda de apps integrada", "Gestión de sensores"]
        },
        {
            id: "server",
            titulo: "SO de Servidores",
            descripcion: "Enfocados en estabilidad y gestión de redes para proveer servicios a clientes.",
            caracteristicas: ["Alta disponibilidad", "Seguridad avanzada", "Gestión masiva de redes"]
        }
    ],
    recursos: {
        titulo: "Recursos Académicos",
        enlaces: [
            {
                nombre: "Fundamentos de Sistemas Operativos (Silberschatz) - PDF",
                url: "https://krlzjmnz.files.wordpress.com/2013/06/silberschatz-fundamentos-de-sistemas-operativos-7ma-ed.pdf"
            },
            {
                nombre: "Organización de Computadoras e Intro a S.O. (Tanenbaum) - PDF",
                url: "https://gc.scalahed.com/recursos/files/r161r/w25041w/Tanenbaum_Andrew_S.-_Organizacion_de_Com1.pdf"
            },
            {
                nombre: "Sistemas Operativos: Aspectos Internos y de Diseño (Stallings) - PDF",
                url: "https://idoc.pub/documents/sistemas-operativos-william-stallings-5to-edicionpdf-d47e781122n2"
            }
        ]
    },
    galeria: [
        {
            id: "gallery-1",
            iframeSrc: "https://giphy.com/embed/sthmCnCpfr8M8jtTQy" // Bongo Cat
        },
        {
            id: "gallery-2",
            iframeSrc: "https://giphy.com/embed/1DfUlEJHwh1fG5nwMx" // Pixel Art
        }
    ]
};