const Repair = require('./../models/repair.model');

exports.findAllMotorcycles = async (req, res) => {
  try {
    const repair = await Repair.findAll({
      where: {
        status: 'pending',
      },
    });

    return res.status(200).json({
      status: 'success',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: this.findAllUsers,
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.findOneMotorcycle = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} not found`,
      });
    }

    return res.status(200).json({
      status: 'success',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: this.findAllUsers,
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.createOneMotorcycle = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const repair = await Repair.create({
      date,
      userId,
    });

    res.status(201).json({
      status: 'success',
      message: 'Repair created successfully!',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: this.findAllUsers,
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.updateMotorcycle = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} not found`,
      });
    }

    await repair.update({ status: 'completed' });

    return res.status(200).json({
      status: 'success',
      message: 'Repair updated successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: this.findAllUsers,
      message: 'Something went very wrong',
      error,
    });
  }
};

exports.deleteMotorcycle = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: `Repair with id: ${id} not found`,
      });
    }

    await repair.update({ status: 'cancelled' });

    return res.status(200).json({
      status: 'success',
      message: 'Repair Deleted successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: this.findAllUsers,
      message: 'Something went very wrong',
      error,
    });
  }
};
