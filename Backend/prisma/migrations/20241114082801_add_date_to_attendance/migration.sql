/*
  Warnings:

  - Added the required column `date` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `attendance` DROP FOREIGN KEY `attendance_username_fkey`;

-- AlterTable
ALTER TABLE `attendance` ADD COLUMN `date` DATETIME(3) NOT NULL,
    MODIFY `username` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_username_fkey` FOREIGN KEY (`username`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
