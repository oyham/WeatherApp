export function formatDate(dateString) {
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];

  const date = new Date(dateString);
  // Suma 6 horas a la fecha para ajustarla a la zona horaria de los datos de la API
  date.setHours(date.getHours() + 6);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek}, ${day} ${month}`;
}