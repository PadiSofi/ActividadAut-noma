ALQUIPC – Sistema de Facturación Web

Descripción:
Este proyecto corresponde al desarrollo de un aplicativo web para la facturación del servicio de alquiler de equipos portátiles de la empresa ALQUIPC.

El sistema permite calcular el valor total del alquiler según:
- Cantidad de equipos (mínimo 2)
- Días iniciales de alquiler
- Días adicionales
- Tipo de servicio (dentro de la ciudad, fuera de la ciudad o dentro del establecimiento)

El aplicativo genera automáticamente un ID de cliente, aplica los recargos y descuentos correspondientes y muestra una factura digital sin opción de impresión, contribuyendo al reciclaje de papel.

---

Tecnologías utilizadas
- HTML
- CSS
- JavaScript

---

Reglas del negocio implementadas
- Valor por día por equipo: $35.000
- Mínimo de equipos: 2
- Tipos de alquiler:
  - Dentro de la ciudad → sin recargo
  - Fuera de la ciudad → recargo del 5%
  - Dentro del establecimiento → descuento del 5%
- Días adicionales:
  - Descuento del 2% por día adicional
  - Descuento máximo permitido: 10% (para evitar pérdidas a la empresa)
- Generación automática de ID de cliente
- Factura digital (no se imprime)

---

Funcionalidades del sistema
- Validación de datos ingresados  
- Cálculo automático del costo total  
- Aplicación de recargos y descuentos  
- Generación automática de ID de cliente  
- Visualización de factura tipo resumen  
- Checklist de calidad del sistema  

---

Fórmula de cálculo
Subtotal: Equipos × Días totales × 35.000

Ajuste por tipo de servicio:
- Fuera de la ciudad → +5%
- Dentro del establecimiento → –5%

Descuento por días adicionales:
- Descuento = Días adicionales × 2%
- Descuento máximo = 10%

Total = Subtotal ajustado × (1 – Descuento)

---

Estructura del proyecto
- index.html
- style.css
- script.js
- README.txt

---

Cómo ejecutar el proyecto
1. Descargar o clonar el repositorio
2. Abrir el archivo `index.html` en un navegador web
3. Ingresar los datos solicitados
4. Presionar el botón Calcular factura
5. Visualizar el resultado en pantalla

---

Autor
Nombre: Sofia Padierna Caro
Ficha: 3194107
