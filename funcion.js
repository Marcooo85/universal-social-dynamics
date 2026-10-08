Autor: Marcooo85 - 08-10-2026 - Propiedad intelectual registrada
Proyecto: funcion-redes-mundial

function adaptarContenidoRedes(textoOriginal) {
  const formatos = {
    whatsapp: textoOriginal + " - Formato corto para WhatsApp",
    instagram: textoOriginal + " #viral #mundial",
    facebook: textoOriginal + " - Version extendida para Facebook",
    tiktok: textoOriginal + " | Tendencia TikTok"
  };
  return formatos;
}