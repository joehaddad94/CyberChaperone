<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('type_id');
            $table->unsignedBigInteger('guardian_id')->nullable();
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('device_token')->nullable();
            $table->timestamps();

            $table->foreign('type_id')->references('id')->on('user_types');
            $table->foreign('guardian_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
