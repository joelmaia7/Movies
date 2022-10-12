export const formatDateToLocaleFormat = (date: string) => {
    const event = new Date(date);
    return event.toLocaleDateString('pt-BR');
}