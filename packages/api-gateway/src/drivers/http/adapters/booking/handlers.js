'use strict';

async function initBookings(req, reply) {

	req.log.info('[http-server]: Booking Module');

	return reply.code(200)
		.header('Content-Type', 'application/json; chartset:utf-8')
		.send({ message: 'Hello Booking Module!' });
}

module.exports = {
	initBookings
}