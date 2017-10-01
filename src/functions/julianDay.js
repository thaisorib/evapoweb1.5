'use strict'

const MONTHS = {
  janeiro: 1,
  fevereiro: 2,
  marco: 3,
  abril: 4,
  maio: 5,
  junho: 6,
  julho: 7,
  agosto: 8,
  setembro: 9,
  outubro: 10,
  novembro: 11,
  dezembro: 12
}

const DAYS_PER_MONTH = {
  janeiro: 31,
  fevereiro: 28,
  marco: 31,
  abril: 30,
  maio: 31,
  junho: 30,
  julho: 31,
  agosto: 31,
  setembro: 30,
  outubro: 31,
  novembro: 30,
  dezembro: 31
}

export function julianDay(day, month, year) {
  let julianDay

  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    if (month == MONTHS.janeiro) {
      julianDay = day;
    }
    if (month == MONTHS.fevereiro) {
      julianDay = (DAYS_PER_MONTH.janeiro + day);
    }
    if (month == MONTHS.marco) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + day);
    }
    if (month == MONTHS.abril) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + day);
    }
    if (month == MONTHS.maio) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + day);
    }
    if (month == MONTHS.junho) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + day);
    }
    if (month == MONTHS.julho) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + day);
    }
    if (month == MONTHS.agosto) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + day);
    }
    if (month == MONTHS.setembro) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + day);
    }
    if (month == MONTHS.outubro) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + DAYS_PER_MONTH.setembro + day);
    }
    if (month == MONTHS.novembro) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + DAYS_PER_MONTH.setembro + DAYS_PER_MONTH.outubro + day);
    }
    if (month == MONTHS.dezembro) {
      julianDay = (DAYS_PER_MONTH.janeiro + (DAYS_PER_MONTH.fevereiro + 1) + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + DAYS_PER_MONTH.setembro + DAYS_PER_MONTH.outubro + DAYS_PER_MONTH.novembro + day);
    }
  }
  else {
    if (month == MONTHS.janeiro) {
      julianDay = day;
    }
    if (month == MONTHS.fevereiro) {
      julianDay = (DAYS_PER_MONTH.janeiro + day);
    }
    if (month == MONTHS.marco) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + day);
    }
    if (month == MONTHS.abril) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + day);
    }
    if (month == MONTHS.maio) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + day);
    }
    if (month == MONTHS.junho) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + day);
    }
    if (month == MONTHS.julho) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + day);
    }
    if (month == MONTHS.agosto) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + day);
    }
    if (month == MONTHS.setembro) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + day);
    }
    if (month == MONTHS.outubro) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + DAYS_PER_MONTH.setembro + day);
    }
    if (month == MONTHS.novembro) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + DAYS_PER_MONTH.setembro + DAYS_PER_MONTH.outubro + day);
    }
    if (month == MONTHS.dezembro) {
      julianDay = (DAYS_PER_MONTH.janeiro + DAYS_PER_MONTH.fevereiro + DAYS_PER_MONTH.marco + DAYS_PER_MONTH.abril + DAYS_PER_MONTH.maio + DAYS_PER_MONTH.junho + DAYS_PER_MONTH.julho + DAYS_PER_MONTH.agosto + DAYS_PER_MONTH.setembro + DAYS_PER_MONTH.outubro + DAYS_PER_MONTH.novembro + day);
    }
  }

  return julianDay
}