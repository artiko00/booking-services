'use strict';

const mathAdapters = require('./math/handlers');
const statusAdapters = require('./status/handlers');
const adminPanelAdapters = require('./admin_panel/handlers');
const notificationsAdapters = require('./notifications/handlers');
const placesAdapters = require('./places/handlers')
const bookingAdapters = require('./booking/handlers')

module.exports = {
	mathAdapters,
	statusAdapters,
	adminPanelAdapters,
    notificationsAdapters,
    placesAdapters,
	bookingAdapters
}
