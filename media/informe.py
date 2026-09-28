"""Genera el informe mensual de ventas."""
import csv
from collections import defaultdict


def total_por_mes(ruta: str) -> dict[str, float]:
    totales: dict[str, float] = defaultdict(float)
    with open(ruta, encoding="utf-8") as f:
        for fila in csv.DictReader(f, delimiter=";"):
            importe = float(fila["Importe"].replace(".", "").replace(",", "."))
            totales[fila["Mes"]] += importe
    return dict(totales)


if __name__ == "__main__":
    for mes, total in total_por_mes("ventas.csv").items():
        print(f"{mes:<10} {total:>12,.2f} €")
