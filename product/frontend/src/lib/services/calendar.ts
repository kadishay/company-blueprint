// LifePilot AI: Google Calendar Service Mock
// Purpose: Simulates interaction with the Google Calendar API.

export interface CalendarEvent {
    summary: string;
    location?: string;
    description?: string;
    start: { dateTime: string; timeZone: string };
    end: { dateTime: string; timeZone: string };
}

class GoogleCalendarService {
    private events: CalendarEvent[] = [];

    async listEvents(timeMin: string, timeMax: string): Promise<CalendarEvent[]> {
        console.log(`[GoogleCalendarService] Listing events from ${timeMin} to ${timeMax}`);
        return this.events;
    }

    async createEvent(event: CalendarEvent): Promise<CalendarEvent> {
        console.log(`[GoogleCalendarService] Creating event: ${event.summary} at ${event.start.dateTime}`);
        this.events.push(event);
        return event;
    }

    async checkAvailability(start: string, end: string): Promise<boolean> {
        const overlapping = this.events.find(e =>
            (start < e.end.dateTime && end > e.start.dateTime)
        );
        return !overlapping;
    }
}

export const googleCalendar = new GoogleCalendarService();
