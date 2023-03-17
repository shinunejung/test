const parent = document.getElementById('parent');
const child = document.getElementById('child');
if (parent.contains(child)) {
  parent.removeChild(child);
}